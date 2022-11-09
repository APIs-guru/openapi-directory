import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EwcerRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=FullName" })
  fullName: string;

  @Metadata({ data: "json, name=RefNo" })
  refNo: string;

  @Metadata({ data: "json, name=TokenNo" })
  tokenNo: string;

  @Metadata({ data: "json, name=UID" })
  uid: string;
}

export enum EwcerRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class EwcerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: EwcerRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: EwcerRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class EwcerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class EwcerRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: EwcerRequestBody;

  @Metadata()
  security: EwcerSecurity;
}

export enum Ewcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Ewcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Ewcer400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ewcer400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ewcer400ApplicationJsonErrorDescriptionEnum;
}

export enum Ewcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Ewcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Ewcer401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ewcer401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ewcer401ApplicationJsonErrorDescriptionEnum;
}

export enum Ewcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Ewcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Ewcer404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ewcer404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ewcer404ApplicationJsonErrorDescriptionEnum;
}

export enum Ewcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Ewcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Ewcer500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ewcer500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ewcer500ApplicationJsonErrorDescriptionEnum;
}

export enum Ewcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Ewcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Ewcer502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ewcer502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ewcer502ApplicationJsonErrorDescriptionEnum;
}

export enum Ewcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Ewcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Ewcer503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ewcer503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ewcer503ApplicationJsonErrorDescriptionEnum;
}

export enum Ewcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Ewcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Ewcer504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ewcer504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ewcer504ApplicationJsonErrorDescriptionEnum;
}


export class EwcerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ewcer400ApplicationJsonObject?: Ewcer400ApplicationJson;

  @Metadata()
  ewcer401ApplicationJsonObject?: Ewcer401ApplicationJson;

  @Metadata()
  ewcer404ApplicationJsonObject?: Ewcer404ApplicationJson;

  @Metadata()
  ewcer500ApplicationJsonObject?: Ewcer500ApplicationJson;

  @Metadata()
  ewcer502ApplicationJsonObject?: Ewcer502ApplicationJson;

  @Metadata()
  ewcer503ApplicationJsonObject?: Ewcer503ApplicationJson;

  @Metadata()
  ewcer504ApplicationJsonObject?: Ewcer504ApplicationJson;
}
