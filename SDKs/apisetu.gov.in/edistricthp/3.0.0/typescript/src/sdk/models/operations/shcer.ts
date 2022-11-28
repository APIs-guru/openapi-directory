import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ShcerRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UDF1" })
  udf1: string;
}

export enum ShcerRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class ShcerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: ShcerRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: ShcerRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class ShcerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Shcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Shcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Shcer400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Shcer400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Shcer400ApplicationJsonErrorDescriptionEnum;
}

export enum Shcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Shcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Shcer401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Shcer401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Shcer401ApplicationJsonErrorDescriptionEnum;
}

export enum Shcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Shcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Shcer404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Shcer404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Shcer404ApplicationJsonErrorDescriptionEnum;
}

export enum Shcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Shcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Shcer500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Shcer500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Shcer500ApplicationJsonErrorDescriptionEnum;
}

export enum Shcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Shcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Shcer502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Shcer502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Shcer502ApplicationJsonErrorDescriptionEnum;
}

export enum Shcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Shcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Shcer503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Shcer503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Shcer503ApplicationJsonErrorDescriptionEnum;
}

export enum Shcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Shcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Shcer504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Shcer504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Shcer504ApplicationJsonErrorDescriptionEnum;
}


export class ShcerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ShcerRequestBody;

  @SpeakeasyMetadata()
  security: ShcerSecurity;
}


export class ShcerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  shcer400ApplicationJsonObject?: Shcer400ApplicationJson;

  @SpeakeasyMetadata()
  shcer401ApplicationJsonObject?: Shcer401ApplicationJson;

  @SpeakeasyMetadata()
  shcer404ApplicationJsonObject?: Shcer404ApplicationJson;

  @SpeakeasyMetadata()
  shcer500ApplicationJsonObject?: Shcer500ApplicationJson;

  @SpeakeasyMetadata()
  shcer502ApplicationJsonObject?: Shcer502ApplicationJson;

  @SpeakeasyMetadata()
  shcer503ApplicationJsonObject?: Shcer503ApplicationJson;

  @SpeakeasyMetadata()
  shcer504ApplicationJsonObject?: Shcer504ApplicationJson;
}
