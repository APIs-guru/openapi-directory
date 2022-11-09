import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DpicrRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationNo" })
  applicationNo: string;

  @Metadata({ data: "json, name=CertificateID" })
  certificateId: string;
}

export enum DpicrRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class DpicrRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: DpicrRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: DpicrRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class DpicrSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class DpicrRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: DpicrRequestBody;

  @Metadata()
  security: DpicrSecurity;
}

export enum Dpicr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Dpicr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Dpicr400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Dpicr400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Dpicr400ApplicationJsonErrorDescriptionEnum;
}

export enum Dpicr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Dpicr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Dpicr401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Dpicr401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Dpicr401ApplicationJsonErrorDescriptionEnum;
}

export enum Dpicr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Dpicr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Dpicr404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Dpicr404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Dpicr404ApplicationJsonErrorDescriptionEnum;
}

export enum Dpicr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Dpicr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Dpicr500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Dpicr500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Dpicr500ApplicationJsonErrorDescriptionEnum;
}

export enum Dpicr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Dpicr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Dpicr502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Dpicr502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Dpicr502ApplicationJsonErrorDescriptionEnum;
}

export enum Dpicr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Dpicr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Dpicr503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Dpicr503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Dpicr503ApplicationJsonErrorDescriptionEnum;
}

export enum Dpicr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Dpicr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Dpicr504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Dpicr504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Dpicr504ApplicationJsonErrorDescriptionEnum;
}


export class DpicrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  dpicr400ApplicationJsonObject?: Dpicr400ApplicationJson;

  @Metadata()
  dpicr401ApplicationJsonObject?: Dpicr401ApplicationJson;

  @Metadata()
  dpicr404ApplicationJsonObject?: Dpicr404ApplicationJson;

  @Metadata()
  dpicr500ApplicationJsonObject?: Dpicr500ApplicationJson;

  @Metadata()
  dpicr502ApplicationJsonObject?: Dpicr502ApplicationJson;

  @Metadata()
  dpicr503ApplicationJsonObject?: Dpicr503ApplicationJson;

  @Metadata()
  dpicr504ApplicationJsonObject?: Dpicr504ApplicationJson;
}
