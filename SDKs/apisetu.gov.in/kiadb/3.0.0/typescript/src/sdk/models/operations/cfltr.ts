import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CfltrRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DOB" })
  dob: string;

  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=RegNum" })
  regNum: string;

  @SpeakeasyMetadata({ data: "json, name=UID" })
  uid: string;
}

export enum CfltrRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class CfltrRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: CfltrRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: CfltrRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class CfltrSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Cfltr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Cfltr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Cfltr400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cfltr400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfltr400ApplicationJsonErrorDescriptionEnum;
}

export enum Cfltr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Cfltr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Cfltr401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cfltr401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfltr401ApplicationJsonErrorDescriptionEnum;
}

export enum Cfltr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Cfltr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Cfltr404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cfltr404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfltr404ApplicationJsonErrorDescriptionEnum;
}

export enum Cfltr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Cfltr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Cfltr500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cfltr500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfltr500ApplicationJsonErrorDescriptionEnum;
}

export enum Cfltr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Cfltr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Cfltr502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cfltr502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfltr502ApplicationJsonErrorDescriptionEnum;
}

export enum Cfltr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Cfltr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Cfltr503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cfltr503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfltr503ApplicationJsonErrorDescriptionEnum;
}

export enum Cfltr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Cfltr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Cfltr504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cfltr504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfltr504ApplicationJsonErrorDescriptionEnum;
}


export class CfltrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CfltrRequestBody;

  @SpeakeasyMetadata()
  security: CfltrSecurity;
}


export class CfltrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cfltr400ApplicationJsonObject?: Cfltr400ApplicationJson;

  @SpeakeasyMetadata()
  cfltr401ApplicationJsonObject?: Cfltr401ApplicationJson;

  @SpeakeasyMetadata()
  cfltr404ApplicationJsonObject?: Cfltr404ApplicationJson;

  @SpeakeasyMetadata()
  cfltr500ApplicationJsonObject?: Cfltr500ApplicationJson;

  @SpeakeasyMetadata()
  cfltr502ApplicationJsonObject?: Cfltr502ApplicationJson;

  @SpeakeasyMetadata()
  cfltr503ApplicationJsonObject?: Cfltr503ApplicationJson;

  @SpeakeasyMetadata()
  cfltr504ApplicationJsonObject?: Cfltr504ApplicationJson;
}
