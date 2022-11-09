import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CocerRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=cert_type" })
  certType: string;

  @Metadata({ data: "json, name=company_name" })
  companyName: string;

  @Metadata({ data: "json, name=reg_no" })
  regNo: string;

  @Metadata({ data: "json, name=sector" })
  sector: string;
}

export enum CocerRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class CocerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: CocerRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: CocerRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class CocerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class CocerRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CocerRequestBody;

  @Metadata()
  security: CocerSecurity;
}

export enum Cocer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Cocer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Cocer400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cocer400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cocer400ApplicationJsonErrorDescriptionEnum;
}

export enum Cocer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Cocer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Cocer401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cocer401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cocer401ApplicationJsonErrorDescriptionEnum;
}

export enum Cocer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Cocer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Cocer404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cocer404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cocer404ApplicationJsonErrorDescriptionEnum;
}

export enum Cocer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Cocer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Cocer500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cocer500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cocer500ApplicationJsonErrorDescriptionEnum;
}

export enum Cocer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Cocer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Cocer502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cocer502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cocer502ApplicationJsonErrorDescriptionEnum;
}

export enum Cocer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Cocer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Cocer503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cocer503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cocer503ApplicationJsonErrorDescriptionEnum;
}

export enum Cocer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Cocer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Cocer504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cocer504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cocer504ApplicationJsonErrorDescriptionEnum;
}


export class CocerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  cocer400ApplicationJsonObject?: Cocer400ApplicationJson;

  @Metadata()
  cocer401ApplicationJsonObject?: Cocer401ApplicationJson;

  @Metadata()
  cocer404ApplicationJsonObject?: Cocer404ApplicationJson;

  @Metadata()
  cocer500ApplicationJsonObject?: Cocer500ApplicationJson;

  @Metadata()
  cocer502ApplicationJsonObject?: Cocer502ApplicationJson;

  @Metadata()
  cocer503ApplicationJsonObject?: Cocer503ApplicationJson;

  @Metadata()
  cocer504ApplicationJsonObject?: Cocer504ApplicationJson;
}
