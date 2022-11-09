import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PrcptRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=FullName" })
  fullName: string;

  @Metadata({ data: "json, name=PI_DOB" })
  piDob: string;

  @Metadata({ data: "json, name=PI_FIN_YEAR" })
  piFinYear: string;

  @Metadata({ data: "json, name=PI_POLICYNBR" })
  piPolicynbr: string;
}

export enum PrcptRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class PrcptRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: PrcptRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: PrcptRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class PrcptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class PrcptRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PrcptRequestBody;

  @Metadata()
  security: PrcptSecurity;
}

export enum Prcpt400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Prcpt400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Prcpt400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Prcpt400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Prcpt400ApplicationJsonErrorDescriptionEnum;
}

export enum Prcpt401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Prcpt401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Prcpt401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Prcpt401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Prcpt401ApplicationJsonErrorDescriptionEnum;
}

export enum Prcpt404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Prcpt404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Prcpt404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Prcpt404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Prcpt404ApplicationJsonErrorDescriptionEnum;
}

export enum Prcpt500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Prcpt500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Prcpt500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Prcpt500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Prcpt500ApplicationJsonErrorDescriptionEnum;
}

export enum Prcpt502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Prcpt502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Prcpt502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Prcpt502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Prcpt502ApplicationJsonErrorDescriptionEnum;
}

export enum Prcpt503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Prcpt503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Prcpt503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Prcpt503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Prcpt503ApplicationJsonErrorDescriptionEnum;
}

export enum Prcpt504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Prcpt504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Prcpt504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Prcpt504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Prcpt504ApplicationJsonErrorDescriptionEnum;
}


export class PrcptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  prcpt400ApplicationJsonObject?: Prcpt400ApplicationJson;

  @Metadata()
  prcpt401ApplicationJsonObject?: Prcpt401ApplicationJson;

  @Metadata()
  prcpt404ApplicationJsonObject?: Prcpt404ApplicationJson;

  @Metadata()
  prcpt500ApplicationJsonObject?: Prcpt500ApplicationJson;

  @Metadata()
  prcpt502ApplicationJsonObject?: Prcpt502ApplicationJson;

  @Metadata()
  prcpt503ApplicationJsonObject?: Prcpt503ApplicationJson;

  @Metadata()
  prcpt504ApplicationJsonObject?: Prcpt504ApplicationJson;
}
