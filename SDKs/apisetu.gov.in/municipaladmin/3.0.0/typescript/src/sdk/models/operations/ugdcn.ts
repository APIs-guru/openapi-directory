import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UgdcnRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentNumber" })
  documentNumber: string;
}

export enum UgdcnRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class UgdcnRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: UgdcnRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: UgdcnRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class UgdcnSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Ugdcn400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Ugdcn400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Ugdcn400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ugdcn400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ugdcn400ApplicationJsonErrorDescriptionEnum;
}

export enum Ugdcn401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Ugdcn401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Ugdcn401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ugdcn401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ugdcn401ApplicationJsonErrorDescriptionEnum;
}

export enum Ugdcn404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Ugdcn404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Ugdcn404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ugdcn404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ugdcn404ApplicationJsonErrorDescriptionEnum;
}

export enum Ugdcn500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Ugdcn500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Ugdcn500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ugdcn500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ugdcn500ApplicationJsonErrorDescriptionEnum;
}

export enum Ugdcn502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Ugdcn502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Ugdcn502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ugdcn502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ugdcn502ApplicationJsonErrorDescriptionEnum;
}

export enum Ugdcn503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Ugdcn503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Ugdcn503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ugdcn503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ugdcn503ApplicationJsonErrorDescriptionEnum;
}

export enum Ugdcn504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Ugdcn504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Ugdcn504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ugdcn504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ugdcn504ApplicationJsonErrorDescriptionEnum;
}


export class UgdcnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UgdcnRequestBody;

  @SpeakeasyMetadata()
  security: UgdcnSecurity;
}


export class UgdcnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ugdcn400ApplicationJsonObject?: Ugdcn400ApplicationJson;

  @SpeakeasyMetadata()
  ugdcn401ApplicationJsonObject?: Ugdcn401ApplicationJson;

  @SpeakeasyMetadata()
  ugdcn404ApplicationJsonObject?: Ugdcn404ApplicationJson;

  @SpeakeasyMetadata()
  ugdcn500ApplicationJsonObject?: Ugdcn500ApplicationJson;

  @SpeakeasyMetadata()
  ugdcn502ApplicationJsonObject?: Ugdcn502ApplicationJson;

  @SpeakeasyMetadata()
  ugdcn503ApplicationJsonObject?: Ugdcn503ApplicationJson;

  @SpeakeasyMetadata()
  ugdcn504ApplicationJsonObject?: Ugdcn504ApplicationJson;
}
