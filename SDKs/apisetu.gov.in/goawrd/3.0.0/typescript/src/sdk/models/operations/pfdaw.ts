import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PfdawRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=Registration" })
  registration: string;
}

export enum PfdawRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class PfdawRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: PfdawRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: PfdawRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class PfdawSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Pfdaw400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Pfdaw400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Pfdaw400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pfdaw400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pfdaw400ApplicationJsonErrorDescriptionEnum;
}

export enum Pfdaw401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Pfdaw401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Pfdaw401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pfdaw401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pfdaw401ApplicationJsonErrorDescriptionEnum;
}

export enum Pfdaw404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Pfdaw404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Pfdaw404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pfdaw404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pfdaw404ApplicationJsonErrorDescriptionEnum;
}

export enum Pfdaw500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Pfdaw500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Pfdaw500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pfdaw500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pfdaw500ApplicationJsonErrorDescriptionEnum;
}

export enum Pfdaw502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Pfdaw502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Pfdaw502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pfdaw502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pfdaw502ApplicationJsonErrorDescriptionEnum;
}

export enum Pfdaw503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Pfdaw503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Pfdaw503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pfdaw503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pfdaw503ApplicationJsonErrorDescriptionEnum;
}

export enum Pfdaw504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Pfdaw504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Pfdaw504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pfdaw504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pfdaw504ApplicationJsonErrorDescriptionEnum;
}


export class PfdawRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PfdawRequestBody;

  @SpeakeasyMetadata()
  security: PfdawSecurity;
}


export class PfdawResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  pfdaw400ApplicationJsonObject?: Pfdaw400ApplicationJson;

  @SpeakeasyMetadata()
  pfdaw401ApplicationJsonObject?: Pfdaw401ApplicationJson;

  @SpeakeasyMetadata()
  pfdaw404ApplicationJsonObject?: Pfdaw404ApplicationJson;

  @SpeakeasyMetadata()
  pfdaw500ApplicationJsonObject?: Pfdaw500ApplicationJson;

  @SpeakeasyMetadata()
  pfdaw502ApplicationJsonObject?: Pfdaw502ApplicationJson;

  @SpeakeasyMetadata()
  pfdaw503ApplicationJsonObject?: Pfdaw503ApplicationJson;

  @SpeakeasyMetadata()
  pfdaw504ApplicationJsonObject?: Pfdaw504ApplicationJson;
}
