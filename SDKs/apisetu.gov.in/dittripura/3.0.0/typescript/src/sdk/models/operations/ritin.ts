import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RitinRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=RefNo" })
  refNo: string;

  @Metadata({ data: "json, name=TokenNo" })
  tokenNo: string;
}

export enum RitinRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class RitinRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: RitinRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: RitinRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class RitinSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class RitinRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: RitinRequestBody;

  @Metadata()
  security: RitinSecurity;
}

export enum Ritin400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Ritin400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Ritin400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ritin400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ritin400ApplicationJsonErrorDescriptionEnum;
}

export enum Ritin401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Ritin401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Ritin401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ritin401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ritin401ApplicationJsonErrorDescriptionEnum;
}

export enum Ritin404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Ritin404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Ritin404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ritin404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ritin404ApplicationJsonErrorDescriptionEnum;
}

export enum Ritin500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Ritin500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Ritin500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ritin500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ritin500ApplicationJsonErrorDescriptionEnum;
}

export enum Ritin502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Ritin502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Ritin502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ritin502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ritin502ApplicationJsonErrorDescriptionEnum;
}

export enum Ritin503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Ritin503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Ritin503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ritin503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ritin503ApplicationJsonErrorDescriptionEnum;
}

export enum Ritin504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Ritin504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Ritin504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Ritin504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Ritin504ApplicationJsonErrorDescriptionEnum;
}


export class RitinResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ritin400ApplicationJsonObject?: Ritin400ApplicationJson;

  @Metadata()
  ritin401ApplicationJsonObject?: Ritin401ApplicationJson;

  @Metadata()
  ritin404ApplicationJsonObject?: Ritin404ApplicationJson;

  @Metadata()
  ritin500ApplicationJsonObject?: Ritin500ApplicationJson;

  @Metadata()
  ritin502ApplicationJsonObject?: Ritin502ApplicationJson;

  @Metadata()
  ritin503ApplicationJsonObject?: Ritin503ApplicationJson;

  @Metadata()
  ritin504ApplicationJsonObject?: Ritin504ApplicationJson;
}
