import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MalcsRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationNo" })
  applicationNo: string;

  @SpeakeasyMetadata({ data: "json, name=licenseNo" })
  licenseNo: string;
}

export enum MalcsRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class MalcsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: MalcsRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: MalcsRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class MalcsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Malcs400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Malcs400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Malcs400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Malcs400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Malcs400ApplicationJsonErrorDescriptionEnum;
}

export enum Malcs401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Malcs401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Malcs401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Malcs401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Malcs401ApplicationJsonErrorDescriptionEnum;
}

export enum Malcs404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Malcs404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Malcs404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Malcs404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Malcs404ApplicationJsonErrorDescriptionEnum;
}

export enum Malcs500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Malcs500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Malcs500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Malcs500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Malcs500ApplicationJsonErrorDescriptionEnum;
}

export enum Malcs502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Malcs502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Malcs502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Malcs502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Malcs502ApplicationJsonErrorDescriptionEnum;
}

export enum Malcs503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Malcs503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Malcs503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Malcs503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Malcs503ApplicationJsonErrorDescriptionEnum;
}

export enum Malcs504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Malcs504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Malcs504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Malcs504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Malcs504ApplicationJsonErrorDescriptionEnum;
}


export class MalcsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: MalcsRequestBody;

  @SpeakeasyMetadata()
  security: MalcsSecurity;
}


export class MalcsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  malcs400ApplicationJsonObject?: Malcs400ApplicationJson;

  @SpeakeasyMetadata()
  malcs401ApplicationJsonObject?: Malcs401ApplicationJson;

  @SpeakeasyMetadata()
  malcs404ApplicationJsonObject?: Malcs404ApplicationJson;

  @SpeakeasyMetadata()
  malcs500ApplicationJsonObject?: Malcs500ApplicationJson;

  @SpeakeasyMetadata()
  malcs502ApplicationJsonObject?: Malcs502ApplicationJson;

  @SpeakeasyMetadata()
  malcs503ApplicationJsonObject?: Malcs503ApplicationJson;

  @SpeakeasyMetadata()
  malcs504ApplicationJsonObject?: Malcs504ApplicationJson;
}
