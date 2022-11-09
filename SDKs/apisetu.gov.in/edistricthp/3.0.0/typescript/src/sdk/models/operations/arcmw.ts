import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ArcmwRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=UDF1" })
  udf1: string;
}

export enum ArcmwRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class ArcmwRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: ArcmwRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: ArcmwRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class ArcmwSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class ArcmwRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: ArcmwRequestBody;

  @Metadata()
  security: ArcmwSecurity;
}

export enum Arcmw400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Arcmw400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Arcmw400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Arcmw400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Arcmw400ApplicationJsonErrorDescriptionEnum;
}

export enum Arcmw401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Arcmw401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Arcmw401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Arcmw401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Arcmw401ApplicationJsonErrorDescriptionEnum;
}

export enum Arcmw404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Arcmw404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Arcmw404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Arcmw404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Arcmw404ApplicationJsonErrorDescriptionEnum;
}

export enum Arcmw500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Arcmw500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Arcmw500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Arcmw500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Arcmw500ApplicationJsonErrorDescriptionEnum;
}

export enum Arcmw502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Arcmw502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Arcmw502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Arcmw502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Arcmw502ApplicationJsonErrorDescriptionEnum;
}

export enum Arcmw503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Arcmw503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Arcmw503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Arcmw503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Arcmw503ApplicationJsonErrorDescriptionEnum;
}

export enum Arcmw504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Arcmw504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Arcmw504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Arcmw504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Arcmw504ApplicationJsonErrorDescriptionEnum;
}


export class ArcmwResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  arcmw400ApplicationJsonObject?: Arcmw400ApplicationJson;

  @Metadata()
  arcmw401ApplicationJsonObject?: Arcmw401ApplicationJson;

  @Metadata()
  arcmw404ApplicationJsonObject?: Arcmw404ApplicationJson;

  @Metadata()
  arcmw500ApplicationJsonObject?: Arcmw500ApplicationJson;

  @Metadata()
  arcmw502ApplicationJsonObject?: Arcmw502ApplicationJson;

  @Metadata()
  arcmw503ApplicationJsonObject?: Arcmw503ApplicationJson;

  @Metadata()
  arcmw504ApplicationJsonObject?: Arcmw504ApplicationJson;
}
