import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MripcRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=INSCODE" })
  inscode: string;

  @SpeakeasyMetadata({ data: "json, name=POLNO" })
  polno: string;

  @SpeakeasyMetadata({ data: "json, name=STARTDT" })
  startdt: string;
}

export enum MripcRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class MripcRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: MripcRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: MripcRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class MripcSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Mripc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Mripc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Mripc400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mripc400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mripc400ApplicationJsonErrorDescriptionEnum;
}

export enum Mripc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Mripc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Mripc401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mripc401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mripc401ApplicationJsonErrorDescriptionEnum;
}

export enum Mripc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Mripc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Mripc404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mripc404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mripc404ApplicationJsonErrorDescriptionEnum;
}

export enum Mripc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Mripc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Mripc500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mripc500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mripc500ApplicationJsonErrorDescriptionEnum;
}

export enum Mripc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Mripc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Mripc502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mripc502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mripc502ApplicationJsonErrorDescriptionEnum;
}

export enum Mripc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Mripc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Mripc503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mripc503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mripc503ApplicationJsonErrorDescriptionEnum;
}

export enum Mripc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Mripc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Mripc504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mripc504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mripc504ApplicationJsonErrorDescriptionEnum;
}


export class MripcRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: MripcRequestBody;

  @SpeakeasyMetadata()
  security: MripcSecurity;
}


export class MripcResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  mripc400ApplicationJsonObject?: Mripc400ApplicationJson;

  @SpeakeasyMetadata()
  mripc401ApplicationJsonObject?: Mripc401ApplicationJson;

  @SpeakeasyMetadata()
  mripc404ApplicationJsonObject?: Mripc404ApplicationJson;

  @SpeakeasyMetadata()
  mripc500ApplicationJsonObject?: Mripc500ApplicationJson;

  @SpeakeasyMetadata()
  mripc502ApplicationJsonObject?: Mripc502ApplicationJson;

  @SpeakeasyMetadata()
  mripc503ApplicationJsonObject?: Mripc503ApplicationJson;

  @SpeakeasyMetadata()
  mripc504ApplicationJsonObject?: Mripc504ApplicationJson;
}
