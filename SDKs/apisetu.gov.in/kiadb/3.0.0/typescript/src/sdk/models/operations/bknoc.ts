import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BknocRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DOB" })
  dob: string;

  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=RegNum" })
  regNum: string;

  @SpeakeasyMetadata({ data: "json, name=UID" })
  uid: string;
}

export enum BknocRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class BknocRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: BknocRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: BknocRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class BknocSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Bknoc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Bknoc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Bknoc400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Bknoc400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Bknoc400ApplicationJsonErrorDescriptionEnum;
}

export enum Bknoc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Bknoc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Bknoc401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Bknoc401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Bknoc401ApplicationJsonErrorDescriptionEnum;
}

export enum Bknoc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Bknoc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Bknoc404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Bknoc404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Bknoc404ApplicationJsonErrorDescriptionEnum;
}

export enum Bknoc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Bknoc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Bknoc500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Bknoc500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Bknoc500ApplicationJsonErrorDescriptionEnum;
}

export enum Bknoc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Bknoc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Bknoc502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Bknoc502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Bknoc502ApplicationJsonErrorDescriptionEnum;
}

export enum Bknoc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Bknoc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Bknoc503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Bknoc503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Bknoc503ApplicationJsonErrorDescriptionEnum;
}

export enum Bknoc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Bknoc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Bknoc504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Bknoc504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Bknoc504ApplicationJsonErrorDescriptionEnum;
}


export class BknocRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: BknocRequestBody;

  @SpeakeasyMetadata()
  security: BknocSecurity;
}


export class BknocResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  bknoc400ApplicationJsonObject?: Bknoc400ApplicationJson;

  @SpeakeasyMetadata()
  bknoc401ApplicationJsonObject?: Bknoc401ApplicationJson;

  @SpeakeasyMetadata()
  bknoc404ApplicationJsonObject?: Bknoc404ApplicationJson;

  @SpeakeasyMetadata()
  bknoc500ApplicationJsonObject?: Bknoc500ApplicationJson;

  @SpeakeasyMetadata()
  bknoc502ApplicationJsonObject?: Bknoc502ApplicationJson;

  @SpeakeasyMetadata()
  bknoc503ApplicationJsonObject?: Bknoc503ApplicationJson;

  @SpeakeasyMetadata()
  bknoc504ApplicationJsonObject?: Bknoc504ApplicationJson;
}
