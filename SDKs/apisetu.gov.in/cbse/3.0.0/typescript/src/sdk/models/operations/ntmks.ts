import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NtmksRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=FullName" })
  fullName: string;

  @Metadata({ data: "json, name=rollno" })
  rollno: string;

  @Metadata({ data: "json, name=year" })
  year: string;
}

export enum NtmksRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class NtmksRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: NtmksRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: NtmksRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class NtmksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class NtmksRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: NtmksRequestBody;

  @Metadata()
  security: NtmksSecurity;
}

export enum Ntmks400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Ntmks400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Ntmks400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ntmks400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ntmks400ApplicationJsonErrorDescriptionEnum;
}

export enum Ntmks401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Ntmks401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Ntmks401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ntmks401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ntmks401ApplicationJsonErrorDescriptionEnum;
}

export enum Ntmks404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Ntmks404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Ntmks404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ntmks404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ntmks404ApplicationJsonErrorDescriptionEnum;
}

export enum Ntmks500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Ntmks500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Ntmks500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ntmks500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ntmks500ApplicationJsonErrorDescriptionEnum;
}

export enum Ntmks502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Ntmks502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Ntmks502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ntmks502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ntmks502ApplicationJsonErrorDescriptionEnum;
}

export enum Ntmks503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Ntmks503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Ntmks503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ntmks503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ntmks503ApplicationJsonErrorDescriptionEnum;
}

export enum Ntmks504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Ntmks504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Ntmks504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ntmks504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ntmks504ApplicationJsonErrorDescriptionEnum;
}


export class NtmksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ntmks400ApplicationJsonObject?: Ntmks400ApplicationJson;

  @Metadata()
  ntmks401ApplicationJsonObject?: Ntmks401ApplicationJson;

  @Metadata()
  ntmks404ApplicationJsonObject?: Ntmks404ApplicationJson;

  @Metadata()
  ntmks500ApplicationJsonObject?: Ntmks500ApplicationJson;

  @Metadata()
  ntmks502ApplicationJsonObject?: Ntmks502ApplicationJson;

  @Metadata()
  ntmks503ApplicationJsonObject?: Ntmks503ApplicationJson;

  @Metadata()
  ntmks504ApplicationJsonObject?: Ntmks504ApplicationJson;
}
