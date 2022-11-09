import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChcerRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=FullName" })
  fullName: string;

  @Metadata({ data: "json, name=RefNo" })
  refNo: string;

  @Metadata({ data: "json, name=TokenNo" })
  tokenNo: string;
}

export enum ChcerRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class ChcerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: ChcerRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: ChcerRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class ChcerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class ChcerRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: ChcerRequestBody;

  @Metadata()
  security: ChcerSecurity;
}

export enum Chcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Chcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Chcer400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Chcer400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Chcer400ApplicationJsonErrorDescriptionEnum;
}

export enum Chcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Chcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Chcer401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Chcer401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Chcer401ApplicationJsonErrorDescriptionEnum;
}

export enum Chcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Chcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Chcer404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Chcer404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Chcer404ApplicationJsonErrorDescriptionEnum;
}

export enum Chcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Chcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Chcer500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Chcer500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Chcer500ApplicationJsonErrorDescriptionEnum;
}

export enum Chcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Chcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Chcer502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Chcer502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Chcer502ApplicationJsonErrorDescriptionEnum;
}

export enum Chcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Chcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Chcer503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Chcer503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Chcer503ApplicationJsonErrorDescriptionEnum;
}

export enum Chcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Chcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Chcer504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Chcer504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Chcer504ApplicationJsonErrorDescriptionEnum;
}


export class ChcerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  chcer400ApplicationJsonObject?: Chcer400ApplicationJson;

  @Metadata()
  chcer401ApplicationJsonObject?: Chcer401ApplicationJson;

  @Metadata()
  chcer404ApplicationJsonObject?: Chcer404ApplicationJson;

  @Metadata()
  chcer500ApplicationJsonObject?: Chcer500ApplicationJson;

  @Metadata()
  chcer502ApplicationJsonObject?: Chcer502ApplicationJson;

  @Metadata()
  chcer503ApplicationJsonObject?: Chcer503ApplicationJson;

  @Metadata()
  chcer504ApplicationJsonObject?: Chcer504ApplicationJson;
}
