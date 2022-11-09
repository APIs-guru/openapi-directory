import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PodocRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=INSCODE" })
  inscode: string;

  @Metadata({ data: "json, name=POLNO" })
  polno: string;

  @Metadata({ data: "json, name=STARTDT" })
  startdt: string;
}

export enum PodocRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class PodocRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: PodocRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: PodocRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class PodocSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class PodocRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PodocRequestBody;

  @Metadata()
  security: PodocSecurity;
}

export enum Podoc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Podoc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Podoc400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Podoc400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Podoc400ApplicationJsonErrorDescriptionEnum;
}

export enum Podoc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Podoc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Podoc401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Podoc401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Podoc401ApplicationJsonErrorDescriptionEnum;
}

export enum Podoc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Podoc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Podoc404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Podoc404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Podoc404ApplicationJsonErrorDescriptionEnum;
}

export enum Podoc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Podoc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Podoc500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Podoc500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Podoc500ApplicationJsonErrorDescriptionEnum;
}

export enum Podoc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Podoc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Podoc502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Podoc502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Podoc502ApplicationJsonErrorDescriptionEnum;
}

export enum Podoc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Podoc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Podoc503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Podoc503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Podoc503ApplicationJsonErrorDescriptionEnum;
}

export enum Podoc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Podoc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Podoc504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Podoc504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Podoc504ApplicationJsonErrorDescriptionEnum;
}


export class PodocResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  podoc400ApplicationJsonObject?: Podoc400ApplicationJson;

  @Metadata()
  podoc401ApplicationJsonObject?: Podoc401ApplicationJson;

  @Metadata()
  podoc404ApplicationJsonObject?: Podoc404ApplicationJson;

  @Metadata()
  podoc500ApplicationJsonObject?: Podoc500ApplicationJson;

  @Metadata()
  podoc502ApplicationJsonObject?: Podoc502ApplicationJson;

  @Metadata()
  podoc503ApplicationJsonObject?: Podoc503ApplicationJson;

  @Metadata()
  podoc504ApplicationJsonObject?: Podoc504ApplicationJson;
}
