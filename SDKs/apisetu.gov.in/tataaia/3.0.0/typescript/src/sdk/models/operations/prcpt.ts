import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrcptRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=PI_DOB" })
  piDob: string;

  @SpeakeasyMetadata({ data: "json, name=PI_FIN_YEAR" })
  piFinYear: string;

  @SpeakeasyMetadata({ data: "json, name=PI_POLICYNBR" })
  piPolicynbr: string;
}

export enum PrcptRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class PrcptRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: PrcptRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: PrcptRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class PrcptSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Prcpt400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Prcpt400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Prcpt400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Prcpt400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Prcpt400ApplicationJsonErrorDescriptionEnum;
}

export enum Prcpt401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Prcpt401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Prcpt401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Prcpt401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Prcpt401ApplicationJsonErrorDescriptionEnum;
}

export enum Prcpt404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Prcpt404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Prcpt404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Prcpt404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Prcpt404ApplicationJsonErrorDescriptionEnum;
}

export enum Prcpt500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Prcpt500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Prcpt500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Prcpt500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Prcpt500ApplicationJsonErrorDescriptionEnum;
}

export enum Prcpt502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Prcpt502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Prcpt502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Prcpt502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Prcpt502ApplicationJsonErrorDescriptionEnum;
}

export enum Prcpt503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Prcpt503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Prcpt503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Prcpt503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Prcpt503ApplicationJsonErrorDescriptionEnum;
}

export enum Prcpt504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Prcpt504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Prcpt504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Prcpt504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Prcpt504ApplicationJsonErrorDescriptionEnum;
}


export class PrcptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PrcptRequestBody;

  @SpeakeasyMetadata()
  security: PrcptSecurity;
}


export class PrcptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  prcpt400ApplicationJsonObject?: Prcpt400ApplicationJson;

  @SpeakeasyMetadata()
  prcpt401ApplicationJsonObject?: Prcpt401ApplicationJson;

  @SpeakeasyMetadata()
  prcpt404ApplicationJsonObject?: Prcpt404ApplicationJson;

  @SpeakeasyMetadata()
  prcpt500ApplicationJsonObject?: Prcpt500ApplicationJson;

  @SpeakeasyMetadata()
  prcpt502ApplicationJsonObject?: Prcpt502ApplicationJson;

  @SpeakeasyMetadata()
  prcpt503ApplicationJsonObject?: Prcpt503ApplicationJson;

  @SpeakeasyMetadata()
  prcpt504ApplicationJsonObject?: Prcpt504ApplicationJson;
}
