import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApptuRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=RefNo" })
  refNo: string;

  @Metadata({ data: "json, name=TokenNo" })
  tokenNo: string;
}

export enum ApptuRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class ApptuRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: ApptuRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: ApptuRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class ApptuSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class ApptuRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: ApptuRequestBody;

  @Metadata()
  security: ApptuSecurity;
}

export enum Apptu400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Apptu400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Apptu400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Apptu400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Apptu400ApplicationJsonErrorDescriptionEnum;
}

export enum Apptu401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Apptu401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Apptu401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Apptu401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Apptu401ApplicationJsonErrorDescriptionEnum;
}

export enum Apptu404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Apptu404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Apptu404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Apptu404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Apptu404ApplicationJsonErrorDescriptionEnum;
}

export enum Apptu500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Apptu500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Apptu500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Apptu500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Apptu500ApplicationJsonErrorDescriptionEnum;
}

export enum Apptu502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Apptu502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Apptu502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Apptu502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Apptu502ApplicationJsonErrorDescriptionEnum;
}

export enum Apptu503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Apptu503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Apptu503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Apptu503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Apptu503ApplicationJsonErrorDescriptionEnum;
}

export enum Apptu504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Apptu504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Apptu504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Apptu504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Apptu504ApplicationJsonErrorDescriptionEnum;
}


export class ApptuResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apptu400ApplicationJsonObject?: Apptu400ApplicationJson;

  @Metadata()
  apptu401ApplicationJsonObject?: Apptu401ApplicationJson;

  @Metadata()
  apptu404ApplicationJsonObject?: Apptu404ApplicationJson;

  @Metadata()
  apptu500ApplicationJsonObject?: Apptu500ApplicationJson;

  @Metadata()
  apptu502ApplicationJsonObject?: Apptu502ApplicationJson;

  @Metadata()
  apptu503ApplicationJsonObject?: Apptu503ApplicationJson;

  @Metadata()
  apptu504ApplicationJsonObject?: Apptu504ApplicationJson;
}
