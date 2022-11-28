import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PripcRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=INSCODE" })
  inscode: string;

  @SpeakeasyMetadata({ data: "json, name=POLNO" })
  polno: string;

  @SpeakeasyMetadata({ data: "json, name=STARTDT" })
  startdt: string;
}

export enum PripcRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class PripcRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: PripcRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: PripcRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class PripcSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Pripc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Pripc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Pripc400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pripc400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pripc400ApplicationJsonErrorDescriptionEnum;
}

export enum Pripc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Pripc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Pripc401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pripc401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pripc401ApplicationJsonErrorDescriptionEnum;
}

export enum Pripc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Pripc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Pripc404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pripc404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pripc404ApplicationJsonErrorDescriptionEnum;
}

export enum Pripc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Pripc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Pripc500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pripc500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pripc500ApplicationJsonErrorDescriptionEnum;
}

export enum Pripc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Pripc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Pripc502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pripc502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pripc502ApplicationJsonErrorDescriptionEnum;
}

export enum Pripc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Pripc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Pripc503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pripc503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pripc503ApplicationJsonErrorDescriptionEnum;
}

export enum Pripc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Pripc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Pripc504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pripc504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pripc504ApplicationJsonErrorDescriptionEnum;
}


export class PripcRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PripcRequestBody;

  @SpeakeasyMetadata()
  security: PripcSecurity;
}


export class PripcResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  pripc400ApplicationJsonObject?: Pripc400ApplicationJson;

  @SpeakeasyMetadata()
  pripc401ApplicationJsonObject?: Pripc401ApplicationJson;

  @SpeakeasyMetadata()
  pripc404ApplicationJsonObject?: Pripc404ApplicationJson;

  @SpeakeasyMetadata()
  pripc500ApplicationJsonObject?: Pripc500ApplicationJson;

  @SpeakeasyMetadata()
  pripc502ApplicationJsonObject?: Pripc502ApplicationJson;

  @SpeakeasyMetadata()
  pripc503ApplicationJsonObject?: Pripc503ApplicationJson;

  @SpeakeasyMetadata()
  pripc504ApplicationJsonObject?: Pripc504ApplicationJson;
}
