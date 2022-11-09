import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class HsmgrRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=FullName" })
  fullName: string;

  @Metadata({ data: "json, name=RROLL" })
  rroll: string;

  @Metadata({ data: "json, name=YEAR" })
  year: string;
}

export enum HsmgrRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class HsmgrRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: HsmgrRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: HsmgrRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class HsmgrSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class HsmgrRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: HsmgrRequestBody;

  @Metadata()
  security: HsmgrSecurity;
}

export enum Hsmgr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Hsmgr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Hsmgr400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Hsmgr400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Hsmgr400ApplicationJsonErrorDescriptionEnum;
}

export enum Hsmgr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Hsmgr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Hsmgr401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Hsmgr401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Hsmgr401ApplicationJsonErrorDescriptionEnum;
}

export enum Hsmgr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Hsmgr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Hsmgr404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Hsmgr404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Hsmgr404ApplicationJsonErrorDescriptionEnum;
}

export enum Hsmgr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Hsmgr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Hsmgr500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Hsmgr500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Hsmgr500ApplicationJsonErrorDescriptionEnum;
}

export enum Hsmgr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Hsmgr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Hsmgr502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Hsmgr502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Hsmgr502ApplicationJsonErrorDescriptionEnum;
}

export enum Hsmgr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Hsmgr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Hsmgr503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Hsmgr503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Hsmgr503ApplicationJsonErrorDescriptionEnum;
}

export enum Hsmgr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Hsmgr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Hsmgr504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Hsmgr504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Hsmgr504ApplicationJsonErrorDescriptionEnum;
}


export class HsmgrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  hsmgr400ApplicationJsonObject?: Hsmgr400ApplicationJson;

  @Metadata()
  hsmgr401ApplicationJsonObject?: Hsmgr401ApplicationJson;

  @Metadata()
  hsmgr404ApplicationJsonObject?: Hsmgr404ApplicationJson;

  @Metadata()
  hsmgr500ApplicationJsonObject?: Hsmgr500ApplicationJson;

  @Metadata()
  hsmgr502ApplicationJsonObject?: Hsmgr502ApplicationJson;

  @Metadata()
  hsmgr503ApplicationJsonObject?: Hsmgr503ApplicationJson;

  @Metadata()
  hsmgr504ApplicationJsonObject?: Hsmgr504ApplicationJson;
}
