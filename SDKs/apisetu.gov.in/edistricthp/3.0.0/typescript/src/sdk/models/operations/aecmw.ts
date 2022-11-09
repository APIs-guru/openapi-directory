import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AecmwRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=UDF1" })
  udf1: string;
}

export enum AecmwRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class AecmwRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: AecmwRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: AecmwRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class AecmwSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class AecmwRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: AecmwRequestBody;

  @Metadata()
  security: AecmwSecurity;
}

export enum Aecmw400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Aecmw400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Aecmw400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Aecmw400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Aecmw400ApplicationJsonErrorDescriptionEnum;
}

export enum Aecmw401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Aecmw401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Aecmw401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Aecmw401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Aecmw401ApplicationJsonErrorDescriptionEnum;
}

export enum Aecmw404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Aecmw404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Aecmw404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Aecmw404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Aecmw404ApplicationJsonErrorDescriptionEnum;
}

export enum Aecmw500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Aecmw500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Aecmw500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Aecmw500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Aecmw500ApplicationJsonErrorDescriptionEnum;
}

export enum Aecmw502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Aecmw502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Aecmw502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Aecmw502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Aecmw502ApplicationJsonErrorDescriptionEnum;
}

export enum Aecmw503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Aecmw503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Aecmw503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Aecmw503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Aecmw503ApplicationJsonErrorDescriptionEnum;
}

export enum Aecmw504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Aecmw504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Aecmw504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Aecmw504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Aecmw504ApplicationJsonErrorDescriptionEnum;
}


export class AecmwResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  aecmw400ApplicationJsonObject?: Aecmw400ApplicationJson;

  @Metadata()
  aecmw401ApplicationJsonObject?: Aecmw401ApplicationJson;

  @Metadata()
  aecmw404ApplicationJsonObject?: Aecmw404ApplicationJson;

  @Metadata()
  aecmw500ApplicationJsonObject?: Aecmw500ApplicationJson;

  @Metadata()
  aecmw502ApplicationJsonObject?: Aecmw502ApplicationJson;

  @Metadata()
  aecmw503ApplicationJsonObject?: Aecmw503ApplicationJson;

  @Metadata()
  aecmw504ApplicationJsonObject?: Aecmw504ApplicationJson;
}
