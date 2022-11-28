import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AlltrRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DOB" })
  dob: string;

  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=RegNum" })
  regNum: string;

  @SpeakeasyMetadata({ data: "json, name=UID" })
  uid: string;
}

export enum AlltrRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class AlltrRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: AlltrRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: AlltrRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class AlltrSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Alltr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Alltr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Alltr400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alltr400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alltr400ApplicationJsonErrorDescriptionEnum;
}

export enum Alltr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Alltr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Alltr401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alltr401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alltr401ApplicationJsonErrorDescriptionEnum;
}

export enum Alltr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Alltr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Alltr404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alltr404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alltr404ApplicationJsonErrorDescriptionEnum;
}

export enum Alltr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Alltr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Alltr500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alltr500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alltr500ApplicationJsonErrorDescriptionEnum;
}

export enum Alltr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Alltr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Alltr502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alltr502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alltr502ApplicationJsonErrorDescriptionEnum;
}

export enum Alltr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Alltr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Alltr503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alltr503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alltr503ApplicationJsonErrorDescriptionEnum;
}

export enum Alltr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Alltr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Alltr504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alltr504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alltr504ApplicationJsonErrorDescriptionEnum;
}


export class AlltrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AlltrRequestBody;

  @SpeakeasyMetadata()
  security: AlltrSecurity;
}


export class AlltrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  alltr400ApplicationJsonObject?: Alltr400ApplicationJson;

  @SpeakeasyMetadata()
  alltr401ApplicationJsonObject?: Alltr401ApplicationJson;

  @SpeakeasyMetadata()
  alltr404ApplicationJsonObject?: Alltr404ApplicationJson;

  @SpeakeasyMetadata()
  alltr500ApplicationJsonObject?: Alltr500ApplicationJson;

  @SpeakeasyMetadata()
  alltr502ApplicationJsonObject?: Alltr502ApplicationJson;

  @SpeakeasyMetadata()
  alltr503ApplicationJsonObject?: Alltr503ApplicationJson;

  @SpeakeasyMetadata()
  alltr504ApplicationJsonObject?: Alltr504ApplicationJson;
}
