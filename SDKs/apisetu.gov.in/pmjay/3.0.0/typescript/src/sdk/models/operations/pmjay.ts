import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PmjayRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DOB" })
  dob: string;

  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=UDF1" })
  udf1: string;

  @SpeakeasyMetadata({ data: "json, name=UDF2" })
  udf2: string;
}

export enum PmjayRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class PmjayRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: PmjayRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: PmjayRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class PmjaySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Pmjay400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Pmjay400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Pmjay400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pmjay400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pmjay400ApplicationJsonErrorDescriptionEnum;
}

export enum Pmjay401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Pmjay401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Pmjay401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pmjay401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pmjay401ApplicationJsonErrorDescriptionEnum;
}

export enum Pmjay404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Pmjay404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Pmjay404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pmjay404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pmjay404ApplicationJsonErrorDescriptionEnum;
}

export enum Pmjay500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Pmjay500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Pmjay500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pmjay500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pmjay500ApplicationJsonErrorDescriptionEnum;
}

export enum Pmjay502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Pmjay502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Pmjay502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pmjay502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pmjay502ApplicationJsonErrorDescriptionEnum;
}

export enum Pmjay503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Pmjay503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Pmjay503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pmjay503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pmjay503ApplicationJsonErrorDescriptionEnum;
}

export enum Pmjay504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Pmjay504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Pmjay504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Pmjay504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Pmjay504ApplicationJsonErrorDescriptionEnum;
}


export class PmjayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PmjayRequestBody;

  @SpeakeasyMetadata()
  security: PmjaySecurity;
}


export class PmjayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  pmjay400ApplicationJsonObject?: Pmjay400ApplicationJson;

  @SpeakeasyMetadata()
  pmjay401ApplicationJsonObject?: Pmjay401ApplicationJson;

  @SpeakeasyMetadata()
  pmjay404ApplicationJsonObject?: Pmjay404ApplicationJson;

  @SpeakeasyMetadata()
  pmjay500ApplicationJsonObject?: Pmjay500ApplicationJson;

  @SpeakeasyMetadata()
  pmjay502ApplicationJsonObject?: Pmjay502ApplicationJson;

  @SpeakeasyMetadata()
  pmjay503ApplicationJsonObject?: Pmjay503ApplicationJson;

  @SpeakeasyMetadata()
  pmjay504ApplicationJsonObject?: Pmjay504ApplicationJson;
}
