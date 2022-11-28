import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class Ror1bRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UID" })
  uid: string;

  @SpeakeasyMetadata({ data: "json, name=refno" })
  refno: string;
}

export enum Ror1bRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class Ror1bRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: Ror1bRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: Ror1bRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class Ror1bSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Ror1b400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Ror1b400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Ror1b400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ror1b400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ror1b400ApplicationJsonErrorDescriptionEnum;
}

export enum Ror1b401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Ror1b401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Ror1b401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ror1b401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ror1b401ApplicationJsonErrorDescriptionEnum;
}

export enum Ror1b404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Ror1b404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Ror1b404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ror1b404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ror1b404ApplicationJsonErrorDescriptionEnum;
}

export enum Ror1b500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Ror1b500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Ror1b500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ror1b500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ror1b500ApplicationJsonErrorDescriptionEnum;
}

export enum Ror1b502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Ror1b502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Ror1b502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ror1b502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ror1b502ApplicationJsonErrorDescriptionEnum;
}

export enum Ror1b503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Ror1b503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Ror1b503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ror1b503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ror1b503ApplicationJsonErrorDescriptionEnum;
}

export enum Ror1b504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Ror1b504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Ror1b504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ror1b504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ror1b504ApplicationJsonErrorDescriptionEnum;
}


export class Ror1bRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Ror1bRequestBody;

  @SpeakeasyMetadata()
  security: Ror1bSecurity;
}


export class Ror1bResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ror1b400ApplicationJsonObject?: Ror1b400ApplicationJson;

  @SpeakeasyMetadata()
  ror1b401ApplicationJsonObject?: Ror1b401ApplicationJson;

  @SpeakeasyMetadata()
  ror1b404ApplicationJsonObject?: Ror1b404ApplicationJson;

  @SpeakeasyMetadata()
  ror1b500ApplicationJsonObject?: Ror1b500ApplicationJson;

  @SpeakeasyMetadata()
  ror1b502ApplicationJsonObject?: Ror1b502ApplicationJson;

  @SpeakeasyMetadata()
  ror1b503ApplicationJsonObject?: Ror1b503ApplicationJson;

  @SpeakeasyMetadata()
  ror1b504ApplicationJsonObject?: Ror1b504ApplicationJson;
}
