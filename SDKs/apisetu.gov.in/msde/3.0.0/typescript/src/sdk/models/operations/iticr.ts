import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IticrRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=FullName" })
  fullName: string;

  @Metadata({ data: "json, name=certno" })
  certno: string;
}

export enum IticrRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class IticrRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: IticrRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: IticrRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class IticrSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class IticrRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: IticrRequestBody;

  @Metadata()
  security: IticrSecurity;
}

export enum Iticr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Iticr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Iticr400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Iticr400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Iticr400ApplicationJsonErrorDescriptionEnum;
}

export enum Iticr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Iticr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Iticr401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Iticr401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Iticr401ApplicationJsonErrorDescriptionEnum;
}

export enum Iticr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Iticr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Iticr404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Iticr404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Iticr404ApplicationJsonErrorDescriptionEnum;
}

export enum Iticr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Iticr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Iticr500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Iticr500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Iticr500ApplicationJsonErrorDescriptionEnum;
}

export enum Iticr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Iticr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Iticr502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Iticr502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Iticr502ApplicationJsonErrorDescriptionEnum;
}

export enum Iticr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Iticr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Iticr503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Iticr503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Iticr503ApplicationJsonErrorDescriptionEnum;
}

export enum Iticr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Iticr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Iticr504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Iticr504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Iticr504ApplicationJsonErrorDescriptionEnum;
}


export class IticrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  iticr400ApplicationJsonObject?: Iticr400ApplicationJson;

  @Metadata()
  iticr401ApplicationJsonObject?: Iticr401ApplicationJson;

  @Metadata()
  iticr404ApplicationJsonObject?: Iticr404ApplicationJson;

  @Metadata()
  iticr500ApplicationJsonObject?: Iticr500ApplicationJson;

  @Metadata()
  iticr502ApplicationJsonObject?: Iticr502ApplicationJson;

  @Metadata()
  iticr503ApplicationJsonObject?: Iticr503ApplicationJson;

  @Metadata()
  iticr504ApplicationJsonObject?: Iticr504ApplicationJson;
}
