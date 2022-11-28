import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SslcrRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DOB" })
  dob: string;

  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=UID" })
  uid: string;

  @SpeakeasyMetadata({ data: "json, name=regno" })
  regno: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year: string;
}

export enum SslcrRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class SslcrRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: SslcrRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: SslcrRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class SslcrSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Sslcr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Sslcr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Sslcr400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sslcr400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sslcr400ApplicationJsonErrorDescriptionEnum;
}

export enum Sslcr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Sslcr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Sslcr401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sslcr401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sslcr401ApplicationJsonErrorDescriptionEnum;
}

export enum Sslcr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Sslcr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Sslcr404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sslcr404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sslcr404ApplicationJsonErrorDescriptionEnum;
}

export enum Sslcr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Sslcr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Sslcr500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sslcr500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sslcr500ApplicationJsonErrorDescriptionEnum;
}

export enum Sslcr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Sslcr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Sslcr502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sslcr502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sslcr502ApplicationJsonErrorDescriptionEnum;
}

export enum Sslcr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Sslcr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Sslcr503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sslcr503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sslcr503ApplicationJsonErrorDescriptionEnum;
}

export enum Sslcr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Sslcr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Sslcr504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sslcr504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sslcr504ApplicationJsonErrorDescriptionEnum;
}


export class SslcrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SslcrRequestBody;

  @SpeakeasyMetadata()
  security: SslcrSecurity;
}


export class SslcrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  sslcr400ApplicationJsonObject?: Sslcr400ApplicationJson;

  @SpeakeasyMetadata()
  sslcr401ApplicationJsonObject?: Sslcr401ApplicationJson;

  @SpeakeasyMetadata()
  sslcr404ApplicationJsonObject?: Sslcr404ApplicationJson;

  @SpeakeasyMetadata()
  sslcr500ApplicationJsonObject?: Sslcr500ApplicationJson;

  @SpeakeasyMetadata()
  sslcr502ApplicationJsonObject?: Sslcr502ApplicationJson;

  @SpeakeasyMetadata()
  sslcr503ApplicationJsonObject?: Sslcr503ApplicationJson;

  @SpeakeasyMetadata()
  sslcr504ApplicationJsonObject?: Sslcr504ApplicationJson;
}
