import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DelcsRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationNo" })
  applicationNo: string;

  @SpeakeasyMetadata({ data: "json, name=licenseNo" })
  licenseNo: string;
}

export enum DelcsRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class DelcsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: DelcsRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: DelcsRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class DelcsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Delcs400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Delcs400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Delcs400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Delcs400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Delcs400ApplicationJsonErrorDescriptionEnum;
}

export enum Delcs401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Delcs401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Delcs401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Delcs401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Delcs401ApplicationJsonErrorDescriptionEnum;
}

export enum Delcs404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Delcs404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Delcs404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Delcs404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Delcs404ApplicationJsonErrorDescriptionEnum;
}

export enum Delcs500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Delcs500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Delcs500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Delcs500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Delcs500ApplicationJsonErrorDescriptionEnum;
}

export enum Delcs502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Delcs502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Delcs502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Delcs502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Delcs502ApplicationJsonErrorDescriptionEnum;
}

export enum Delcs503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Delcs503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Delcs503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Delcs503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Delcs503ApplicationJsonErrorDescriptionEnum;
}

export enum Delcs504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Delcs504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Delcs504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Delcs504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Delcs504ApplicationJsonErrorDescriptionEnum;
}


export class DelcsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: DelcsRequestBody;

  @SpeakeasyMetadata()
  security: DelcsSecurity;
}


export class DelcsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  delcs400ApplicationJsonObject?: Delcs400ApplicationJson;

  @SpeakeasyMetadata()
  delcs401ApplicationJsonObject?: Delcs401ApplicationJson;

  @SpeakeasyMetadata()
  delcs404ApplicationJsonObject?: Delcs404ApplicationJson;

  @SpeakeasyMetadata()
  delcs500ApplicationJsonObject?: Delcs500ApplicationJson;

  @SpeakeasyMetadata()
  delcs502ApplicationJsonObject?: Delcs502ApplicationJson;

  @SpeakeasyMetadata()
  delcs503ApplicationJsonObject?: Delcs503ApplicationJson;

  @SpeakeasyMetadata()
  delcs504ApplicationJsonObject?: Delcs504ApplicationJson;
}
