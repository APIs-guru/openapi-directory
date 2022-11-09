import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ArmtwRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=UDF1" })
  udf1: string;
}

export enum ArmtwRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class ArmtwRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: ArmtwRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: ArmtwRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class ArmtwSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class ArmtwRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: ArmtwRequestBody;

  @Metadata()
  security: ArmtwSecurity;
}

export enum Armtw400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Armtw400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Armtw400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Armtw400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Armtw400ApplicationJsonErrorDescriptionEnum;
}

export enum Armtw401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Armtw401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Armtw401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Armtw401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Armtw401ApplicationJsonErrorDescriptionEnum;
}

export enum Armtw404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Armtw404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Armtw404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Armtw404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Armtw404ApplicationJsonErrorDescriptionEnum;
}

export enum Armtw500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Armtw500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Armtw500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Armtw500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Armtw500ApplicationJsonErrorDescriptionEnum;
}

export enum Armtw502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Armtw502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Armtw502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Armtw502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Armtw502ApplicationJsonErrorDescriptionEnum;
}

export enum Armtw503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Armtw503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Armtw503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Armtw503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Armtw503ApplicationJsonErrorDescriptionEnum;
}

export enum Armtw504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Armtw504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Armtw504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Armtw504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Armtw504ApplicationJsonErrorDescriptionEnum;
}


export class ArmtwResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  armtw400ApplicationJsonObject?: Armtw400ApplicationJson;

  @Metadata()
  armtw401ApplicationJsonObject?: Armtw401ApplicationJson;

  @Metadata()
  armtw404ApplicationJsonObject?: Armtw404ApplicationJson;

  @Metadata()
  armtw500ApplicationJsonObject?: Armtw500ApplicationJson;

  @Metadata()
  armtw502ApplicationJsonObject?: Armtw502ApplicationJson;

  @Metadata()
  armtw503ApplicationJsonObject?: Armtw503ApplicationJson;

  @Metadata()
  armtw504ApplicationJsonObject?: Armtw504ApplicationJson;
}
