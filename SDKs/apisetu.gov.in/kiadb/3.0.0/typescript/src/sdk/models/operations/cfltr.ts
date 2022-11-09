import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CfltrRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=DOB" })
  dob: string;

  @Metadata({ data: "json, name=FullName" })
  fullName: string;

  @Metadata({ data: "json, name=RegNum" })
  regNum: string;

  @Metadata({ data: "json, name=UID" })
  uid: string;
}

export enum CfltrRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class CfltrRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: CfltrRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: CfltrRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class CfltrSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class CfltrRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CfltrRequestBody;

  @Metadata()
  security: CfltrSecurity;
}

export enum Cfltr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Cfltr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Cfltr400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cfltr400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfltr400ApplicationJsonErrorDescriptionEnum;
}

export enum Cfltr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Cfltr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Cfltr401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cfltr401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfltr401ApplicationJsonErrorDescriptionEnum;
}

export enum Cfltr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Cfltr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Cfltr404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cfltr404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfltr404ApplicationJsonErrorDescriptionEnum;
}

export enum Cfltr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Cfltr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Cfltr500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cfltr500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfltr500ApplicationJsonErrorDescriptionEnum;
}

export enum Cfltr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Cfltr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Cfltr502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cfltr502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfltr502ApplicationJsonErrorDescriptionEnum;
}

export enum Cfltr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Cfltr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Cfltr503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cfltr503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfltr503ApplicationJsonErrorDescriptionEnum;
}

export enum Cfltr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Cfltr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Cfltr504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cfltr504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfltr504ApplicationJsonErrorDescriptionEnum;
}


export class CfltrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  cfltr400ApplicationJsonObject?: Cfltr400ApplicationJson;

  @Metadata()
  cfltr401ApplicationJsonObject?: Cfltr401ApplicationJson;

  @Metadata()
  cfltr404ApplicationJsonObject?: Cfltr404ApplicationJson;

  @Metadata()
  cfltr500ApplicationJsonObject?: Cfltr500ApplicationJson;

  @Metadata()
  cfltr502ApplicationJsonObject?: Cfltr502ApplicationJson;

  @Metadata()
  cfltr503ApplicationJsonObject?: Cfltr503ApplicationJson;

  @Metadata()
  cfltr504ApplicationJsonObject?: Cfltr504ApplicationJson;
}
