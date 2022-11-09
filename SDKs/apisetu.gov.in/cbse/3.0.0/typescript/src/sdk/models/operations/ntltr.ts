import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NtltrRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=FullName" })
  fullName: string;

  @Metadata({ data: "json, name=rollno" })
  rollno: string;

  @Metadata({ data: "json, name=year" })
  year: string;
}

export enum NtltrRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class NtltrRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: NtltrRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: NtltrRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class NtltrSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class NtltrRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: NtltrRequestBody;

  @Metadata()
  security: NtltrSecurity;
}

export enum Ntltr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Ntltr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Ntltr400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ntltr400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ntltr400ApplicationJsonErrorDescriptionEnum;
}

export enum Ntltr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Ntltr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Ntltr401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ntltr401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ntltr401ApplicationJsonErrorDescriptionEnum;
}

export enum Ntltr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Ntltr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Ntltr404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ntltr404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ntltr404ApplicationJsonErrorDescriptionEnum;
}

export enum Ntltr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Ntltr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Ntltr500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ntltr500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ntltr500ApplicationJsonErrorDescriptionEnum;
}

export enum Ntltr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Ntltr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Ntltr502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ntltr502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ntltr502ApplicationJsonErrorDescriptionEnum;
}

export enum Ntltr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Ntltr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Ntltr503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ntltr503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ntltr503ApplicationJsonErrorDescriptionEnum;
}

export enum Ntltr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Ntltr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Ntltr504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ntltr504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ntltr504ApplicationJsonErrorDescriptionEnum;
}


export class NtltrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ntltr400ApplicationJsonObject?: Ntltr400ApplicationJson;

  @Metadata()
  ntltr401ApplicationJsonObject?: Ntltr401ApplicationJson;

  @Metadata()
  ntltr404ApplicationJsonObject?: Ntltr404ApplicationJson;

  @Metadata()
  ntltr500ApplicationJsonObject?: Ntltr500ApplicationJson;

  @Metadata()
  ntltr502ApplicationJsonObject?: Ntltr502ApplicationJson;

  @Metadata()
  ntltr503ApplicationJsonObject?: Ntltr503ApplicationJson;

  @Metadata()
  ntltr504ApplicationJsonObject?: Ntltr504ApplicationJson;
}
