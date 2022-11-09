import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DmcerRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=UDF1" })
  udf1: string;
}

export enum DmcerRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class DmcerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: DmcerRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: DmcerRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class DmcerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class DmcerRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: DmcerRequestBody;

  @Metadata()
  security: DmcerSecurity;
}

export enum Dmcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Dmcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Dmcer400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Dmcer400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Dmcer400ApplicationJsonErrorDescriptionEnum;
}

export enum Dmcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Dmcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Dmcer401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Dmcer401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Dmcer401ApplicationJsonErrorDescriptionEnum;
}

export enum Dmcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Dmcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Dmcer404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Dmcer404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Dmcer404ApplicationJsonErrorDescriptionEnum;
}

export enum Dmcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Dmcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Dmcer500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Dmcer500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Dmcer500ApplicationJsonErrorDescriptionEnum;
}

export enum Dmcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Dmcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Dmcer502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Dmcer502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Dmcer502ApplicationJsonErrorDescriptionEnum;
}

export enum Dmcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Dmcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Dmcer503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Dmcer503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Dmcer503ApplicationJsonErrorDescriptionEnum;
}

export enum Dmcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Dmcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Dmcer504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Dmcer504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Dmcer504ApplicationJsonErrorDescriptionEnum;
}


export class DmcerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dmcer400ApplicationJsonObject?: Dmcer400ApplicationJson;

  @Metadata()
  dmcer401ApplicationJsonObject?: Dmcer401ApplicationJson;

  @Metadata()
  dmcer404ApplicationJsonObject?: Dmcer404ApplicationJson;

  @Metadata()
  dmcer500ApplicationJsonObject?: Dmcer500ApplicationJson;

  @Metadata()
  dmcer502ApplicationJsonObject?: Dmcer502ApplicationJson;

  @Metadata()
  dmcer503ApplicationJsonObject?: Dmcer503ApplicationJson;

  @Metadata()
  dmcer504ApplicationJsonObject?: Dmcer504ApplicationJson;
}
