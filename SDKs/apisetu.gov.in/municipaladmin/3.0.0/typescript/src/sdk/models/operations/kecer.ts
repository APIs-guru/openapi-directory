import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class KecerRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentNumber" })
  documentNumber: string;
}

export enum KecerRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class KecerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: KecerRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: KecerRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class KecerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class KecerRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: KecerRequestBody;

  @Metadata()
  security: KecerSecurity;
}

export enum Kecer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Kecer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Kecer400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Kecer400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Kecer400ApplicationJsonErrorDescriptionEnum;
}

export enum Kecer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Kecer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Kecer401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Kecer401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Kecer401ApplicationJsonErrorDescriptionEnum;
}

export enum Kecer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Kecer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Kecer404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Kecer404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Kecer404ApplicationJsonErrorDescriptionEnum;
}

export enum Kecer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Kecer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Kecer500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Kecer500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Kecer500ApplicationJsonErrorDescriptionEnum;
}

export enum Kecer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Kecer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Kecer502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Kecer502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Kecer502ApplicationJsonErrorDescriptionEnum;
}

export enum Kecer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Kecer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Kecer503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Kecer503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Kecer503ApplicationJsonErrorDescriptionEnum;
}

export enum Kecer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Kecer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Kecer504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Kecer504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Kecer504ApplicationJsonErrorDescriptionEnum;
}


export class KecerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  kecer400ApplicationJsonObject?: Kecer400ApplicationJson;

  @Metadata()
  kecer401ApplicationJsonObject?: Kecer401ApplicationJson;

  @Metadata()
  kecer404ApplicationJsonObject?: Kecer404ApplicationJson;

  @Metadata()
  kecer500ApplicationJsonObject?: Kecer500ApplicationJson;

  @Metadata()
  kecer502ApplicationJsonObject?: Kecer502ApplicationJson;

  @Metadata()
  kecer503ApplicationJsonObject?: Kecer503ApplicationJson;

  @Metadata()
  kecer504ApplicationJsonObject?: Kecer504ApplicationJson;
}
