import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LabrpRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=FullName" })
  fullName: string;

  @Metadata({ data: "json, name=reportdate" })
  reportdate: string;

  @Metadata({ data: "json, name=uhid" })
  uhid: string;
}

export enum LabrpRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class LabrpRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: LabrpRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: LabrpRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class LabrpSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class LabrpRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: LabrpRequestBody;

  @Metadata()
  security: LabrpSecurity;
}

export enum Labrp400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Labrp400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Labrp400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Labrp400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Labrp400ApplicationJsonErrorDescriptionEnum;
}

export enum Labrp401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Labrp401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Labrp401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Labrp401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Labrp401ApplicationJsonErrorDescriptionEnum;
}

export enum Labrp404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Labrp404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Labrp404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Labrp404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Labrp404ApplicationJsonErrorDescriptionEnum;
}

export enum Labrp500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Labrp500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Labrp500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Labrp500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Labrp500ApplicationJsonErrorDescriptionEnum;
}

export enum Labrp502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Labrp502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Labrp502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Labrp502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Labrp502ApplicationJsonErrorDescriptionEnum;
}

export enum Labrp503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Labrp503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Labrp503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Labrp503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Labrp503ApplicationJsonErrorDescriptionEnum;
}

export enum Labrp504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Labrp504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Labrp504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Labrp504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Labrp504ApplicationJsonErrorDescriptionEnum;
}


export class LabrpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  labrp400ApplicationJsonObject?: Labrp400ApplicationJson;

  @Metadata()
  labrp401ApplicationJsonObject?: Labrp401ApplicationJson;

  @Metadata()
  labrp404ApplicationJsonObject?: Labrp404ApplicationJson;

  @Metadata()
  labrp500ApplicationJsonObject?: Labrp500ApplicationJson;

  @Metadata()
  labrp502ApplicationJsonObject?: Labrp502ApplicationJson;

  @Metadata()
  labrp503ApplicationJsonObject?: Labrp503ApplicationJson;

  @Metadata()
  labrp504ApplicationJsonObject?: Labrp504ApplicationJson;
}
