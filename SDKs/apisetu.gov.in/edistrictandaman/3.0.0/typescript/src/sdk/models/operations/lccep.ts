import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LccepRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateNumber" })
  certificateNumber: string;
}

export enum LccepRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class LccepRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: LccepRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: LccepRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class LccepSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Lccep400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Lccep400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Lccep400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Lccep400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Lccep400ApplicationJsonErrorDescriptionEnum;
}

export enum Lccep401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Lccep401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Lccep401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Lccep401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Lccep401ApplicationJsonErrorDescriptionEnum;
}

export enum Lccep404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Lccep404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Lccep404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Lccep404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Lccep404ApplicationJsonErrorDescriptionEnum;
}

export enum Lccep500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Lccep500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Lccep500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Lccep500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Lccep500ApplicationJsonErrorDescriptionEnum;
}

export enum Lccep502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Lccep502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Lccep502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Lccep502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Lccep502ApplicationJsonErrorDescriptionEnum;
}

export enum Lccep503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Lccep503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Lccep503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Lccep503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Lccep503ApplicationJsonErrorDescriptionEnum;
}

export enum Lccep504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Lccep504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Lccep504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Lccep504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Lccep504ApplicationJsonErrorDescriptionEnum;
}


export class LccepRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: LccepRequestBody;

  @SpeakeasyMetadata()
  security: LccepSecurity;
}


export class LccepResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  lccep400ApplicationJsonObject?: Lccep400ApplicationJson;

  @SpeakeasyMetadata()
  lccep401ApplicationJsonObject?: Lccep401ApplicationJson;

  @SpeakeasyMetadata()
  lccep404ApplicationJsonObject?: Lccep404ApplicationJson;

  @SpeakeasyMetadata()
  lccep500ApplicationJsonObject?: Lccep500ApplicationJson;

  @SpeakeasyMetadata()
  lccep502ApplicationJsonObject?: Lccep502ApplicationJson;

  @SpeakeasyMetadata()
  lccep503ApplicationJsonObject?: Lccep503ApplicationJson;

  @SpeakeasyMetadata()
  lccep504ApplicationJsonObject?: Lccep504ApplicationJson;
}
