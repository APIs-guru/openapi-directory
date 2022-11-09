import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AemtwRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=UDF1" })
  udf1: string;
}

export enum AemtwRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class AemtwRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: AemtwRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: AemtwRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class AemtwSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class AemtwRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: AemtwRequestBody;

  @Metadata()
  security: AemtwSecurity;
}

export enum Aemtw400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Aemtw400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Aemtw400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Aemtw400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Aemtw400ApplicationJsonErrorDescriptionEnum;
}

export enum Aemtw401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Aemtw401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Aemtw401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Aemtw401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Aemtw401ApplicationJsonErrorDescriptionEnum;
}

export enum Aemtw404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Aemtw404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Aemtw404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Aemtw404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Aemtw404ApplicationJsonErrorDescriptionEnum;
}

export enum Aemtw500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Aemtw500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Aemtw500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Aemtw500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Aemtw500ApplicationJsonErrorDescriptionEnum;
}

export enum Aemtw502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Aemtw502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Aemtw502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Aemtw502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Aemtw502ApplicationJsonErrorDescriptionEnum;
}

export enum Aemtw503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Aemtw503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Aemtw503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Aemtw503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Aemtw503ApplicationJsonErrorDescriptionEnum;
}

export enum Aemtw504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Aemtw504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Aemtw504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Aemtw504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Aemtw504ApplicationJsonErrorDescriptionEnum;
}


export class AemtwResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  aemtw400ApplicationJsonObject?: Aemtw400ApplicationJson;

  @Metadata()
  aemtw401ApplicationJsonObject?: Aemtw401ApplicationJson;

  @Metadata()
  aemtw404ApplicationJsonObject?: Aemtw404ApplicationJson;

  @Metadata()
  aemtw500ApplicationJsonObject?: Aemtw500ApplicationJson;

  @Metadata()
  aemtw502ApplicationJsonObject?: Aemtw502ApplicationJson;

  @Metadata()
  aemtw503ApplicationJsonObject?: Aemtw503ApplicationJson;

  @Metadata()
  aemtw504ApplicationJsonObject?: Aemtw504ApplicationJson;
}
