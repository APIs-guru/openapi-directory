import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SslcsRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RefNo" })
  refNo: string;

  @SpeakeasyMetadata({ data: "json, name=TokenNo" })
  tokenNo: string;
}

export enum SslcsRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class SslcsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: SslcsRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: SslcsRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class SslcsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Sslcs400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Sslcs400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Sslcs400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sslcs400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sslcs400ApplicationJsonErrorDescriptionEnum;
}

export enum Sslcs401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Sslcs401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Sslcs401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sslcs401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sslcs401ApplicationJsonErrorDescriptionEnum;
}

export enum Sslcs404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Sslcs404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Sslcs404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sslcs404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sslcs404ApplicationJsonErrorDescriptionEnum;
}

export enum Sslcs500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Sslcs500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Sslcs500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sslcs500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sslcs500ApplicationJsonErrorDescriptionEnum;
}

export enum Sslcs502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Sslcs502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Sslcs502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sslcs502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sslcs502ApplicationJsonErrorDescriptionEnum;
}

export enum Sslcs503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Sslcs503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Sslcs503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sslcs503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sslcs503ApplicationJsonErrorDescriptionEnum;
}

export enum Sslcs504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Sslcs504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Sslcs504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sslcs504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sslcs504ApplicationJsonErrorDescriptionEnum;
}


export class SslcsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SslcsRequestBody;

  @SpeakeasyMetadata()
  security: SslcsSecurity;
}


export class SslcsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  sslcs400ApplicationJsonObject?: Sslcs400ApplicationJson;

  @SpeakeasyMetadata()
  sslcs401ApplicationJsonObject?: Sslcs401ApplicationJson;

  @SpeakeasyMetadata()
  sslcs404ApplicationJsonObject?: Sslcs404ApplicationJson;

  @SpeakeasyMetadata()
  sslcs500ApplicationJsonObject?: Sslcs500ApplicationJson;

  @SpeakeasyMetadata()
  sslcs502ApplicationJsonObject?: Sslcs502ApplicationJson;

  @SpeakeasyMetadata()
  sslcs503ApplicationJsonObject?: Sslcs503ApplicationJson;

  @SpeakeasyMetadata()
  sslcs504ApplicationJsonObject?: Sslcs504ApplicationJson;
}
