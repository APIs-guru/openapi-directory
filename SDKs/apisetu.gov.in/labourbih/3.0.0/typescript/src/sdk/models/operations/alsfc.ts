import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AlsfcRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RefNo" })
  refNo: string;

  @SpeakeasyMetadata({ data: "json, name=TokenNo" })
  tokenNo: string;
}

export enum AlsfcRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class AlsfcRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: AlsfcRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: AlsfcRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class AlsfcSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Alsfc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Alsfc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Alsfc400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alsfc400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alsfc400ApplicationJsonErrorDescriptionEnum;
}

export enum Alsfc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Alsfc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Alsfc401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alsfc401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alsfc401ApplicationJsonErrorDescriptionEnum;
}

export enum Alsfc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Alsfc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Alsfc404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alsfc404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alsfc404ApplicationJsonErrorDescriptionEnum;
}

export enum Alsfc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Alsfc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Alsfc500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alsfc500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alsfc500ApplicationJsonErrorDescriptionEnum;
}

export enum Alsfc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Alsfc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Alsfc502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alsfc502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alsfc502ApplicationJsonErrorDescriptionEnum;
}

export enum Alsfc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Alsfc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Alsfc503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alsfc503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alsfc503ApplicationJsonErrorDescriptionEnum;
}

export enum Alsfc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Alsfc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Alsfc504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alsfc504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alsfc504ApplicationJsonErrorDescriptionEnum;
}


export class AlsfcRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AlsfcRequestBody;

  @SpeakeasyMetadata()
  security: AlsfcSecurity;
}


export class AlsfcResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  alsfc400ApplicationJsonObject?: Alsfc400ApplicationJson;

  @SpeakeasyMetadata()
  alsfc401ApplicationJsonObject?: Alsfc401ApplicationJson;

  @SpeakeasyMetadata()
  alsfc404ApplicationJsonObject?: Alsfc404ApplicationJson;

  @SpeakeasyMetadata()
  alsfc500ApplicationJsonObject?: Alsfc500ApplicationJson;

  @SpeakeasyMetadata()
  alsfc502ApplicationJsonObject?: Alsfc502ApplicationJson;

  @SpeakeasyMetadata()
  alsfc503ApplicationJsonObject?: Alsfc503ApplicationJson;

  @SpeakeasyMetadata()
  alsfc504ApplicationJsonObject?: Alsfc504ApplicationJson;
}
