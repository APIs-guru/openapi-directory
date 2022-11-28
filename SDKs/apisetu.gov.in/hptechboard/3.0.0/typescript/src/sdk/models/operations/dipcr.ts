import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DipcrRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=RollNo" })
  rollNo: string;
}

export enum DipcrRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class DipcrRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: DipcrRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: DipcrRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class DipcrSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Dipcr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Dipcr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Dipcr400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Dipcr400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Dipcr400ApplicationJsonErrorDescriptionEnum;
}

export enum Dipcr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Dipcr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Dipcr401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Dipcr401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Dipcr401ApplicationJsonErrorDescriptionEnum;
}

export enum Dipcr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Dipcr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Dipcr404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Dipcr404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Dipcr404ApplicationJsonErrorDescriptionEnum;
}

export enum Dipcr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Dipcr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Dipcr500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Dipcr500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Dipcr500ApplicationJsonErrorDescriptionEnum;
}

export enum Dipcr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Dipcr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Dipcr502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Dipcr502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Dipcr502ApplicationJsonErrorDescriptionEnum;
}

export enum Dipcr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Dipcr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Dipcr503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Dipcr503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Dipcr503ApplicationJsonErrorDescriptionEnum;
}

export enum Dipcr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Dipcr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Dipcr504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Dipcr504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Dipcr504ApplicationJsonErrorDescriptionEnum;
}


export class DipcrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: DipcrRequestBody;

  @SpeakeasyMetadata()
  security: DipcrSecurity;
}


export class DipcrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dipcr400ApplicationJsonObject?: Dipcr400ApplicationJson;

  @SpeakeasyMetadata()
  dipcr401ApplicationJsonObject?: Dipcr401ApplicationJson;

  @SpeakeasyMetadata()
  dipcr404ApplicationJsonObject?: Dipcr404ApplicationJson;

  @SpeakeasyMetadata()
  dipcr500ApplicationJsonObject?: Dipcr500ApplicationJson;

  @SpeakeasyMetadata()
  dipcr502ApplicationJsonObject?: Dipcr502ApplicationJson;

  @SpeakeasyMetadata()
  dipcr503ApplicationJsonObject?: Dipcr503ApplicationJson;

  @SpeakeasyMetadata()
  dipcr504ApplicationJsonObject?: Dipcr504ApplicationJson;
}
