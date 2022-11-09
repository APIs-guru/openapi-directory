import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LccepRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateNumber" })
  certificateNumber: string;
}

export enum LccepRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class LccepRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: LccepRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: LccepRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class LccepSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class LccepRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: LccepRequestBody;

  @Metadata()
  security: LccepSecurity;
}

export enum Lccep400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Lccep400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Lccep400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lccep400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lccep400ApplicationJsonErrorDescriptionEnum;
}

export enum Lccep401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Lccep401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Lccep401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lccep401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lccep401ApplicationJsonErrorDescriptionEnum;
}

export enum Lccep404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Lccep404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Lccep404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lccep404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lccep404ApplicationJsonErrorDescriptionEnum;
}

export enum Lccep500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Lccep500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Lccep500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lccep500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lccep500ApplicationJsonErrorDescriptionEnum;
}

export enum Lccep502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Lccep502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Lccep502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lccep502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lccep502ApplicationJsonErrorDescriptionEnum;
}

export enum Lccep503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Lccep503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Lccep503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lccep503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lccep503ApplicationJsonErrorDescriptionEnum;
}

export enum Lccep504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Lccep504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Lccep504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lccep504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lccep504ApplicationJsonErrorDescriptionEnum;
}


export class LccepResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  lccep400ApplicationJsonObject?: Lccep400ApplicationJson;

  @Metadata()
  lccep401ApplicationJsonObject?: Lccep401ApplicationJson;

  @Metadata()
  lccep404ApplicationJsonObject?: Lccep404ApplicationJson;

  @Metadata()
  lccep500ApplicationJsonObject?: Lccep500ApplicationJson;

  @Metadata()
  lccep502ApplicationJsonObject?: Lccep502ApplicationJson;

  @Metadata()
  lccep503ApplicationJsonObject?: Lccep503ApplicationJson;

  @Metadata()
  lccep504ApplicationJsonObject?: Lccep504ApplicationJson;
}
