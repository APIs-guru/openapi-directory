import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WtrblRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=DOB" })
  dob: string;

  @Metadata({ data: "json, name=FullName" })
  fullName: string;

  @Metadata({ data: "json, name=RegNum" })
  regNum: string;

  @Metadata({ data: "json, name=UID" })
  uid: string;
}

export enum WtrblRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class WtrblRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: WtrblRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: WtrblRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class WtrblSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class WtrblRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: WtrblRequestBody;

  @Metadata()
  security: WtrblSecurity;
}

export enum Wtrbl400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Wtrbl400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Wtrbl400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Wtrbl400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Wtrbl400ApplicationJsonErrorDescriptionEnum;
}

export enum Wtrbl401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Wtrbl401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Wtrbl401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Wtrbl401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Wtrbl401ApplicationJsonErrorDescriptionEnum;
}

export enum Wtrbl404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Wtrbl404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Wtrbl404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Wtrbl404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Wtrbl404ApplicationJsonErrorDescriptionEnum;
}

export enum Wtrbl500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Wtrbl500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Wtrbl500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Wtrbl500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Wtrbl500ApplicationJsonErrorDescriptionEnum;
}

export enum Wtrbl502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Wtrbl502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Wtrbl502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Wtrbl502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Wtrbl502ApplicationJsonErrorDescriptionEnum;
}

export enum Wtrbl503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Wtrbl503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Wtrbl503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Wtrbl503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Wtrbl503ApplicationJsonErrorDescriptionEnum;
}

export enum Wtrbl504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Wtrbl504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Wtrbl504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Wtrbl504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Wtrbl504ApplicationJsonErrorDescriptionEnum;
}


export class WtrblResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  wtrbl400ApplicationJsonObject?: Wtrbl400ApplicationJson;

  @Metadata()
  wtrbl401ApplicationJsonObject?: Wtrbl401ApplicationJson;

  @Metadata()
  wtrbl404ApplicationJsonObject?: Wtrbl404ApplicationJson;

  @Metadata()
  wtrbl500ApplicationJsonObject?: Wtrbl500ApplicationJson;

  @Metadata()
  wtrbl502ApplicationJsonObject?: Wtrbl502ApplicationJson;

  @Metadata()
  wtrbl503ApplicationJsonObject?: Wtrbl503ApplicationJson;

  @Metadata()
  wtrbl504ApplicationJsonObject?: Wtrbl504ApplicationJson;
}
