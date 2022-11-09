import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PancrRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=DOB" })
  dob: string;

  @Metadata({ data: "json, name=FullName" })
  fullName: string;

  @Metadata({ data: "json, name=GENDER" })
  gender: string;

  @Metadata({ data: "json, name=PANFullName" })
  panFullName: string;

  @Metadata({ data: "json, name=UID" })
  uid: string;

  @Metadata({ data: "json, name=panno" })
  panno: string;
}

export enum PancrRequestBodyFormatEnum {
    Xml = "xml"
,    Pdf = "pdf"
}


export class PancrRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: PancrRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: PancrRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class PancrSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class PancrRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PancrRequestBody;

  @Metadata()
  security: PancrSecurity;
}

export enum Pancr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Pancr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Pancr400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Pancr400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Pancr400ApplicationJsonErrorDescriptionEnum;
}

export enum Pancr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Pancr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Pancr401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Pancr401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Pancr401ApplicationJsonErrorDescriptionEnum;
}

export enum Pancr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Pancr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Pancr404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Pancr404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Pancr404ApplicationJsonErrorDescriptionEnum;
}

export enum Pancr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Pancr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Pancr500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Pancr500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Pancr500ApplicationJsonErrorDescriptionEnum;
}

export enum Pancr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Pancr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Pancr502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Pancr502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Pancr502ApplicationJsonErrorDescriptionEnum;
}

export enum Pancr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Pancr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Pancr503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Pancr503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Pancr503ApplicationJsonErrorDescriptionEnum;
}

export enum Pancr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Pancr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Pancr504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Pancr504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Pancr504ApplicationJsonErrorDescriptionEnum;
}


export class PancrResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  pancr400ApplicationJsonObject?: Pancr400ApplicationJson;

  @Metadata()
  pancr401ApplicationJsonObject?: Pancr401ApplicationJson;

  @Metadata()
  pancr404ApplicationJsonObject?: Pancr404ApplicationJson;

  @Metadata()
  pancr500ApplicationJsonObject?: Pancr500ApplicationJson;

  @Metadata()
  pancr502ApplicationJsonObject?: Pancr502ApplicationJson;

  @Metadata()
  pancr503ApplicationJsonObject?: Pancr503ApplicationJson;

  @Metadata()
  pancr504ApplicationJsonObject?: Pancr504ApplicationJson;
}
