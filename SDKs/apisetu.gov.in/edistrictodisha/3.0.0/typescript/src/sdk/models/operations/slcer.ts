import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SlcerRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UID" })
  uid: string;

  @SpeakeasyMetadata({ data: "json, name=refno" })
  refno: string;
}

export enum SlcerRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class SlcerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: SlcerRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: SlcerRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class SlcerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Slcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Slcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Slcer400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Slcer400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Slcer400ApplicationJsonErrorDescriptionEnum;
}

export enum Slcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Slcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Slcer401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Slcer401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Slcer401ApplicationJsonErrorDescriptionEnum;
}

export enum Slcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Slcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Slcer404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Slcer404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Slcer404ApplicationJsonErrorDescriptionEnum;
}

export enum Slcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Slcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Slcer500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Slcer500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Slcer500ApplicationJsonErrorDescriptionEnum;
}

export enum Slcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Slcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Slcer502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Slcer502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Slcer502ApplicationJsonErrorDescriptionEnum;
}

export enum Slcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Slcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Slcer503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Slcer503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Slcer503ApplicationJsonErrorDescriptionEnum;
}

export enum Slcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Slcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Slcer504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Slcer504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Slcer504ApplicationJsonErrorDescriptionEnum;
}


export class SlcerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SlcerRequestBody;

  @SpeakeasyMetadata()
  security: SlcerSecurity;
}


export class SlcerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  slcer400ApplicationJsonObject?: Slcer400ApplicationJson;

  @SpeakeasyMetadata()
  slcer401ApplicationJsonObject?: Slcer401ApplicationJson;

  @SpeakeasyMetadata()
  slcer404ApplicationJsonObject?: Slcer404ApplicationJson;

  @SpeakeasyMetadata()
  slcer500ApplicationJsonObject?: Slcer500ApplicationJson;

  @SpeakeasyMetadata()
  slcer502ApplicationJsonObject?: Slcer502ApplicationJson;

  @SpeakeasyMetadata()
  slcer503ApplicationJsonObject?: Slcer503ApplicationJson;

  @SpeakeasyMetadata()
  slcer504ApplicationJsonObject?: Slcer504ApplicationJson;
}
