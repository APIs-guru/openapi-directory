import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TapcnRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentNumber" })
  documentNumber: string;
}

export enum TapcnRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class TapcnRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: TapcnRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: TapcnRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class TapcnSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class TapcnRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: TapcnRequestBody;

  @Metadata()
  security: TapcnSecurity;
}

export enum Tapcn400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Tapcn400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Tapcn400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tapcn400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tapcn400ApplicationJsonErrorDescriptionEnum;
}

export enum Tapcn401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Tapcn401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Tapcn401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tapcn401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tapcn401ApplicationJsonErrorDescriptionEnum;
}

export enum Tapcn404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Tapcn404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Tapcn404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tapcn404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tapcn404ApplicationJsonErrorDescriptionEnum;
}

export enum Tapcn500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Tapcn500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Tapcn500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tapcn500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tapcn500ApplicationJsonErrorDescriptionEnum;
}

export enum Tapcn502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Tapcn502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Tapcn502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tapcn502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tapcn502ApplicationJsonErrorDescriptionEnum;
}

export enum Tapcn503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Tapcn503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Tapcn503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tapcn503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tapcn503ApplicationJsonErrorDescriptionEnum;
}

export enum Tapcn504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Tapcn504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Tapcn504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tapcn504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tapcn504ApplicationJsonErrorDescriptionEnum;
}


export class TapcnResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tapcn400ApplicationJsonObject?: Tapcn400ApplicationJson;

  @Metadata()
  tapcn401ApplicationJsonObject?: Tapcn401ApplicationJson;

  @Metadata()
  tapcn404ApplicationJsonObject?: Tapcn404ApplicationJson;

  @Metadata()
  tapcn500ApplicationJsonObject?: Tapcn500ApplicationJson;

  @Metadata()
  tapcn502ApplicationJsonObject?: Tapcn502ApplicationJson;

  @Metadata()
  tapcn503ApplicationJsonObject?: Tapcn503ApplicationJson;

  @Metadata()
  tapcn504ApplicationJsonObject?: Tapcn504ApplicationJson;
}
