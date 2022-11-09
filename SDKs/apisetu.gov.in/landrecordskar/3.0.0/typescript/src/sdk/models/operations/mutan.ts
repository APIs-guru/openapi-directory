import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MutanRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentNumber" })
  documentNumber: string;
}

export enum MutanRequestBodyFormatEnum {
    Xml = "xml"
,    Pdf = "pdf"
}


export class MutanRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: MutanRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: MutanRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class MutanSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class MutanRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: MutanRequestBody;

  @Metadata()
  security: MutanSecurity;
}

export enum Mutan400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Mutan400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Mutan400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mutan400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mutan400ApplicationJsonErrorDescriptionEnum;
}

export enum Mutan401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Mutan401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Mutan401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mutan401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mutan401ApplicationJsonErrorDescriptionEnum;
}

export enum Mutan404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Mutan404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Mutan404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mutan404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mutan404ApplicationJsonErrorDescriptionEnum;
}

export enum Mutan500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Mutan500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Mutan500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mutan500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mutan500ApplicationJsonErrorDescriptionEnum;
}

export enum Mutan502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Mutan502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Mutan502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mutan502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mutan502ApplicationJsonErrorDescriptionEnum;
}

export enum Mutan503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Mutan503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Mutan503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mutan503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mutan503ApplicationJsonErrorDescriptionEnum;
}

export enum Mutan504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Mutan504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Mutan504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mutan504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mutan504ApplicationJsonErrorDescriptionEnum;
}


export class MutanResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  mutan400ApplicationJsonObject?: Mutan400ApplicationJson;

  @Metadata()
  mutan401ApplicationJsonObject?: Mutan401ApplicationJson;

  @Metadata()
  mutan404ApplicationJsonObject?: Mutan404ApplicationJson;

  @Metadata()
  mutan500ApplicationJsonObject?: Mutan500ApplicationJson;

  @Metadata()
  mutan502ApplicationJsonObject?: Mutan502ApplicationJson;

  @Metadata()
  mutan503ApplicationJsonObject?: Mutan503ApplicationJson;

  @Metadata()
  mutan504ApplicationJsonObject?: Mutan504ApplicationJson;
}
