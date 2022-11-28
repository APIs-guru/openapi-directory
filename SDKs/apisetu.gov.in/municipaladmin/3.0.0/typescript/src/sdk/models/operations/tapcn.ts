import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TapcnRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentNumber" })
  documentNumber: string;
}

export enum TapcnRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class TapcnRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: TapcnRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: TapcnRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class TapcnSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Tapcn400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Tapcn400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Tapcn400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Tapcn400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Tapcn400ApplicationJsonErrorDescriptionEnum;
}

export enum Tapcn401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Tapcn401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Tapcn401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Tapcn401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Tapcn401ApplicationJsonErrorDescriptionEnum;
}

export enum Tapcn404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Tapcn404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Tapcn404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Tapcn404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Tapcn404ApplicationJsonErrorDescriptionEnum;
}

export enum Tapcn500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Tapcn500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Tapcn500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Tapcn500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Tapcn500ApplicationJsonErrorDescriptionEnum;
}

export enum Tapcn502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Tapcn502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Tapcn502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Tapcn502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Tapcn502ApplicationJsonErrorDescriptionEnum;
}

export enum Tapcn503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Tapcn503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Tapcn503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Tapcn503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Tapcn503ApplicationJsonErrorDescriptionEnum;
}

export enum Tapcn504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Tapcn504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Tapcn504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Tapcn504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Tapcn504ApplicationJsonErrorDescriptionEnum;
}


export class TapcnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TapcnRequestBody;

  @SpeakeasyMetadata()
  security: TapcnSecurity;
}


export class TapcnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tapcn400ApplicationJsonObject?: Tapcn400ApplicationJson;

  @SpeakeasyMetadata()
  tapcn401ApplicationJsonObject?: Tapcn401ApplicationJson;

  @SpeakeasyMetadata()
  tapcn404ApplicationJsonObject?: Tapcn404ApplicationJson;

  @SpeakeasyMetadata()
  tapcn500ApplicationJsonObject?: Tapcn500ApplicationJson;

  @SpeakeasyMetadata()
  tapcn502ApplicationJsonObject?: Tapcn502ApplicationJson;

  @SpeakeasyMetadata()
  tapcn503ApplicationJsonObject?: Tapcn503ApplicationJson;

  @SpeakeasyMetadata()
  tapcn504ApplicationJsonObject?: Tapcn504ApplicationJson;
}
