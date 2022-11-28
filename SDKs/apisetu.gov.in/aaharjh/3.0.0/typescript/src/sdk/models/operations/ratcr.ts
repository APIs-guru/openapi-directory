import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RatcrRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DOB" })
  dob: string;

  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=GENDER" })
  gender: string;

  @SpeakeasyMetadata({ data: "json, name=UID" })
  uid: string;
}

export enum RatcrRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class RatcrRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: RatcrRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: RatcrRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class RatcrSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Ratcr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Ratcr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Ratcr400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ratcr400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ratcr400ApplicationJsonErrorDescriptionEnum;
}

export enum Ratcr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Ratcr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Ratcr401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ratcr401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ratcr401ApplicationJsonErrorDescriptionEnum;
}

export enum Ratcr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Ratcr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Ratcr404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ratcr404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ratcr404ApplicationJsonErrorDescriptionEnum;
}

export enum Ratcr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Ratcr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Ratcr500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ratcr500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ratcr500ApplicationJsonErrorDescriptionEnum;
}

export enum Ratcr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Ratcr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Ratcr502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ratcr502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ratcr502ApplicationJsonErrorDescriptionEnum;
}

export enum Ratcr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Ratcr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Ratcr503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ratcr503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ratcr503ApplicationJsonErrorDescriptionEnum;
}

export enum Ratcr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Ratcr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Ratcr504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ratcr504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ratcr504ApplicationJsonErrorDescriptionEnum;
}


export class RatcrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: RatcrRequestBody;

  @SpeakeasyMetadata()
  security: RatcrSecurity;
}


export class RatcrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ratcr400ApplicationJsonObject?: Ratcr400ApplicationJson;

  @SpeakeasyMetadata()
  ratcr401ApplicationJsonObject?: Ratcr401ApplicationJson;

  @SpeakeasyMetadata()
  ratcr404ApplicationJsonObject?: Ratcr404ApplicationJson;

  @SpeakeasyMetadata()
  ratcr500ApplicationJsonObject?: Ratcr500ApplicationJson;

  @SpeakeasyMetadata()
  ratcr502ApplicationJsonObject?: Ratcr502ApplicationJson;

  @SpeakeasyMetadata()
  ratcr503ApplicationJsonObject?: Ratcr503ApplicationJson;

  @SpeakeasyMetadata()
  ratcr504ApplicationJsonObject?: Ratcr504ApplicationJson;
}
