import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AlsblRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RefNo" })
  refNo: string;

  @SpeakeasyMetadata({ data: "json, name=TokenNo" })
  tokenNo: string;
}

export enum AlsblRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class AlsblRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: AlsblRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: AlsblRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class AlsblSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Alsbl400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Alsbl400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Alsbl400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alsbl400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alsbl400ApplicationJsonErrorDescriptionEnum;
}

export enum Alsbl401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Alsbl401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Alsbl401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alsbl401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alsbl401ApplicationJsonErrorDescriptionEnum;
}

export enum Alsbl404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Alsbl404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Alsbl404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alsbl404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alsbl404ApplicationJsonErrorDescriptionEnum;
}

export enum Alsbl500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Alsbl500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Alsbl500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alsbl500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alsbl500ApplicationJsonErrorDescriptionEnum;
}

export enum Alsbl502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Alsbl502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Alsbl502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alsbl502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alsbl502ApplicationJsonErrorDescriptionEnum;
}

export enum Alsbl503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Alsbl503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Alsbl503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alsbl503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alsbl503ApplicationJsonErrorDescriptionEnum;
}

export enum Alsbl504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Alsbl504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Alsbl504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Alsbl504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Alsbl504ApplicationJsonErrorDescriptionEnum;
}


export class AlsblRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AlsblRequestBody;

  @SpeakeasyMetadata()
  security: AlsblSecurity;
}


export class AlsblResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  alsbl400ApplicationJsonObject?: Alsbl400ApplicationJson;

  @SpeakeasyMetadata()
  alsbl401ApplicationJsonObject?: Alsbl401ApplicationJson;

  @SpeakeasyMetadata()
  alsbl404ApplicationJsonObject?: Alsbl404ApplicationJson;

  @SpeakeasyMetadata()
  alsbl500ApplicationJsonObject?: Alsbl500ApplicationJson;

  @SpeakeasyMetadata()
  alsbl502ApplicationJsonObject?: Alsbl502ApplicationJson;

  @SpeakeasyMetadata()
  alsbl503ApplicationJsonObject?: Alsbl503ApplicationJson;

  @SpeakeasyMetadata()
  alsbl504ApplicationJsonObject?: Alsbl504ApplicationJson;
}
