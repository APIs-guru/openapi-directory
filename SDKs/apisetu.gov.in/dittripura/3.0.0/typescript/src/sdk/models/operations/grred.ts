import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GrredRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RefNo" })
  refNo: string;

  @SpeakeasyMetadata({ data: "json, name=TokenNo" })
  tokenNo: string;
}

export enum GrredRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class GrredRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: GrredRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: GrredRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class GrredSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Grred400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Grred400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Grred400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Grred400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Grred400ApplicationJsonErrorDescriptionEnum;
}

export enum Grred401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Grred401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Grred401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Grred401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Grred401ApplicationJsonErrorDescriptionEnum;
}

export enum Grred404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Grred404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Grred404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Grred404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Grred404ApplicationJsonErrorDescriptionEnum;
}

export enum Grred500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Grred500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Grred500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Grred500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Grred500ApplicationJsonErrorDescriptionEnum;
}

export enum Grred502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Grred502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Grred502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Grred502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Grred502ApplicationJsonErrorDescriptionEnum;
}

export enum Grred503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Grred503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Grred503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Grred503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Grred503ApplicationJsonErrorDescriptionEnum;
}

export enum Grred504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Grred504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Grred504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Grred504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Grred504ApplicationJsonErrorDescriptionEnum;
}


export class GrredRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: GrredRequestBody;

  @SpeakeasyMetadata()
  security: GrredSecurity;
}


export class GrredResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  grred400ApplicationJsonObject?: Grred400ApplicationJson;

  @SpeakeasyMetadata()
  grred401ApplicationJsonObject?: Grred401ApplicationJson;

  @SpeakeasyMetadata()
  grred404ApplicationJsonObject?: Grred404ApplicationJson;

  @SpeakeasyMetadata()
  grred500ApplicationJsonObject?: Grred500ApplicationJson;

  @SpeakeasyMetadata()
  grred502ApplicationJsonObject?: Grred502ApplicationJson;

  @SpeakeasyMetadata()
  grred503ApplicationJsonObject?: Grred503ApplicationJson;

  @SpeakeasyMetadata()
  grred504ApplicationJsonObject?: Grred504ApplicationJson;
}
