import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RegriiRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=regno" })
  regno: string;

  @SpeakeasyMetadata({ data: "json, name=sro_id" })
  sroId: string;

  @SpeakeasyMetadata({ data: "json, name=yr" })
  yr: string;
}

export enum RegriiRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class RegriiRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: RegriiRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: RegriiRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class RegriiSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Regrii400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Regrii400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Regrii400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Regrii400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Regrii400ApplicationJsonErrorDescriptionEnum;
}

export enum Regrii401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Regrii401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Regrii401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Regrii401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Regrii401ApplicationJsonErrorDescriptionEnum;
}

export enum Regrii404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Regrii404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Regrii404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Regrii404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Regrii404ApplicationJsonErrorDescriptionEnum;
}

export enum Regrii500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Regrii500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Regrii500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Regrii500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Regrii500ApplicationJsonErrorDescriptionEnum;
}

export enum Regrii502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Regrii502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Regrii502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Regrii502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Regrii502ApplicationJsonErrorDescriptionEnum;
}

export enum Regrii503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Regrii503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Regrii503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Regrii503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Regrii503ApplicationJsonErrorDescriptionEnum;
}

export enum Regrii504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Regrii504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Regrii504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Regrii504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Regrii504ApplicationJsonErrorDescriptionEnum;
}


export class RegriiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: RegriiRequestBody;

  @SpeakeasyMetadata()
  security: RegriiSecurity;
}


export class RegriiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  regrii400ApplicationJsonObject?: Regrii400ApplicationJson;

  @SpeakeasyMetadata()
  regrii401ApplicationJsonObject?: Regrii401ApplicationJson;

  @SpeakeasyMetadata()
  regrii404ApplicationJsonObject?: Regrii404ApplicationJson;

  @SpeakeasyMetadata()
  regrii500ApplicationJsonObject?: Regrii500ApplicationJson;

  @SpeakeasyMetadata()
  regrii502ApplicationJsonObject?: Regrii502ApplicationJson;

  @SpeakeasyMetadata()
  regrii503ApplicationJsonObject?: Regrii503ApplicationJson;

  @SpeakeasyMetadata()
  regrii504ApplicationJsonObject?: Regrii504ApplicationJson;
}
