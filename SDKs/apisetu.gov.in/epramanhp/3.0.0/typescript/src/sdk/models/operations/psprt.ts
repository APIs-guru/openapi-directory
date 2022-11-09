import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PsprtRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RefNo" })
  refNo: string;
}

export enum PsprtRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class PsprtRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: PsprtRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: PsprtRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class PsprtSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class PsprtRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PsprtRequestBody;

  @Metadata()
  security: PsprtSecurity;
}

export enum Psprt400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Psprt400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Psprt400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Psprt400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Psprt400ApplicationJsonErrorDescriptionEnum;
}

export enum Psprt401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Psprt401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Psprt401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Psprt401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Psprt401ApplicationJsonErrorDescriptionEnum;
}

export enum Psprt404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Psprt404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Psprt404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Psprt404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Psprt404ApplicationJsonErrorDescriptionEnum;
}

export enum Psprt500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Psprt500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Psprt500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Psprt500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Psprt500ApplicationJsonErrorDescriptionEnum;
}

export enum Psprt502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Psprt502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Psprt502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Psprt502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Psprt502ApplicationJsonErrorDescriptionEnum;
}

export enum Psprt503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Psprt503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Psprt503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Psprt503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Psprt503ApplicationJsonErrorDescriptionEnum;
}

export enum Psprt504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Psprt504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Psprt504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Psprt504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Psprt504ApplicationJsonErrorDescriptionEnum;
}


export class PsprtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  psprt400ApplicationJsonObject?: Psprt400ApplicationJson;

  @Metadata()
  psprt401ApplicationJsonObject?: Psprt401ApplicationJson;

  @Metadata()
  psprt404ApplicationJsonObject?: Psprt404ApplicationJson;

  @Metadata()
  psprt500ApplicationJsonObject?: Psprt500ApplicationJson;

  @Metadata()
  psprt502ApplicationJsonObject?: Psprt502ApplicationJson;

  @Metadata()
  psprt503ApplicationJsonObject?: Psprt503ApplicationJson;

  @Metadata()
  psprt504ApplicationJsonObject?: Psprt504ApplicationJson;
}
