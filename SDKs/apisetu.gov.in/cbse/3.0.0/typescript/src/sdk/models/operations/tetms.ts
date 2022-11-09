import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TetmsRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=FullName" })
  fullName: string;

  @Metadata({ data: "json, name=rollno" })
  rollno: string;

  @Metadata({ data: "json, name=year_month" })
  yearMonth: string;
}

export enum TetmsRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class TetmsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: TetmsRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: TetmsRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class TetmsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class TetmsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: TetmsRequestBody;

  @Metadata()
  security: TetmsSecurity;
}

export enum Tetms400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Tetms400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Tetms400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tetms400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tetms400ApplicationJsonErrorDescriptionEnum;
}

export enum Tetms401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Tetms401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Tetms401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tetms401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tetms401ApplicationJsonErrorDescriptionEnum;
}

export enum Tetms404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Tetms404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Tetms404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tetms404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tetms404ApplicationJsonErrorDescriptionEnum;
}

export enum Tetms500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Tetms500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Tetms500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tetms500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tetms500ApplicationJsonErrorDescriptionEnum;
}

export enum Tetms502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Tetms502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Tetms502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tetms502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tetms502ApplicationJsonErrorDescriptionEnum;
}

export enum Tetms503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Tetms503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Tetms503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tetms503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tetms503ApplicationJsonErrorDescriptionEnum;
}

export enum Tetms504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Tetms504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Tetms504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tetms504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tetms504ApplicationJsonErrorDescriptionEnum;
}


export class TetmsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tetms400ApplicationJsonObject?: Tetms400ApplicationJson;

  @Metadata()
  tetms401ApplicationJsonObject?: Tetms401ApplicationJson;

  @Metadata()
  tetms404ApplicationJsonObject?: Tetms404ApplicationJson;

  @Metadata()
  tetms500ApplicationJsonObject?: Tetms500ApplicationJson;

  @Metadata()
  tetms502ApplicationJsonObject?: Tetms502ApplicationJson;

  @Metadata()
  tetms503ApplicationJsonObject?: Tetms503ApplicationJson;

  @Metadata()
  tetms504ApplicationJsonObject?: Tetms504ApplicationJson;
}
