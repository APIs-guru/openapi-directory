import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MutanRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentNumber" })
  documentNumber: string;
}

export enum MutanRequestBodyFormatEnum {
    Xml = "xml",
    Pdf = "pdf"
}


export class MutanRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: MutanRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: MutanRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class MutanSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Mutan400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Mutan400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Mutan400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mutan400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mutan400ApplicationJsonErrorDescriptionEnum;
}

export enum Mutan401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Mutan401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Mutan401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mutan401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mutan401ApplicationJsonErrorDescriptionEnum;
}

export enum Mutan404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Mutan404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Mutan404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mutan404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mutan404ApplicationJsonErrorDescriptionEnum;
}

export enum Mutan500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Mutan500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Mutan500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mutan500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mutan500ApplicationJsonErrorDescriptionEnum;
}

export enum Mutan502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Mutan502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Mutan502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mutan502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mutan502ApplicationJsonErrorDescriptionEnum;
}

export enum Mutan503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Mutan503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Mutan503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mutan503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mutan503ApplicationJsonErrorDescriptionEnum;
}

export enum Mutan504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Mutan504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Mutan504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mutan504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mutan504ApplicationJsonErrorDescriptionEnum;
}


export class MutanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: MutanRequestBody;

  @SpeakeasyMetadata()
  security: MutanSecurity;
}


export class MutanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  mutan400ApplicationJsonObject?: Mutan400ApplicationJson;

  @SpeakeasyMetadata()
  mutan401ApplicationJsonObject?: Mutan401ApplicationJson;

  @SpeakeasyMetadata()
  mutan404ApplicationJsonObject?: Mutan404ApplicationJson;

  @SpeakeasyMetadata()
  mutan500ApplicationJsonObject?: Mutan500ApplicationJson;

  @SpeakeasyMetadata()
  mutan502ApplicationJsonObject?: Mutan502ApplicationJson;

  @SpeakeasyMetadata()
  mutan503ApplicationJsonObject?: Mutan503ApplicationJson;

  @SpeakeasyMetadata()
  mutan504ApplicationJsonObject?: Mutan504ApplicationJson;
}
