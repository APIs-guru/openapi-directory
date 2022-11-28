import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NctscRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=rollno" })
  rollno: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year: string;
}

export enum NctscRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class NctscRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: NctscRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: NctscRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class NctscSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Nctsc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Nctsc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Nctsc400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nctsc400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nctsc400ApplicationJsonErrorDescriptionEnum;
}

export enum Nctsc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Nctsc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Nctsc401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nctsc401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nctsc401ApplicationJsonErrorDescriptionEnum;
}

export enum Nctsc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Nctsc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Nctsc404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nctsc404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nctsc404ApplicationJsonErrorDescriptionEnum;
}

export enum Nctsc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Nctsc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Nctsc500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nctsc500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nctsc500ApplicationJsonErrorDescriptionEnum;
}

export enum Nctsc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Nctsc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Nctsc502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nctsc502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nctsc502ApplicationJsonErrorDescriptionEnum;
}

export enum Nctsc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Nctsc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Nctsc503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nctsc503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nctsc503ApplicationJsonErrorDescriptionEnum;
}

export enum Nctsc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Nctsc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Nctsc504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nctsc504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nctsc504ApplicationJsonErrorDescriptionEnum;
}


export class NctscRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: NctscRequestBody;

  @SpeakeasyMetadata()
  security: NctscSecurity;
}


export class NctscResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  nctsc400ApplicationJsonObject?: Nctsc400ApplicationJson;

  @SpeakeasyMetadata()
  nctsc401ApplicationJsonObject?: Nctsc401ApplicationJson;

  @SpeakeasyMetadata()
  nctsc404ApplicationJsonObject?: Nctsc404ApplicationJson;

  @SpeakeasyMetadata()
  nctsc500ApplicationJsonObject?: Nctsc500ApplicationJson;

  @SpeakeasyMetadata()
  nctsc502ApplicationJsonObject?: Nctsc502ApplicationJson;

  @SpeakeasyMetadata()
  nctsc503ApplicationJsonObject?: Nctsc503ApplicationJson;

  @SpeakeasyMetadata()
  nctsc504ApplicationJsonObject?: Nctsc504ApplicationJson;
}
