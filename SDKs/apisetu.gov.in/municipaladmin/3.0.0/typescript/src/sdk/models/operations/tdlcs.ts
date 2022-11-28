import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TdlcsRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentNumber" })
  documentNumber: string;
}

export enum TdlcsRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class TdlcsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: TdlcsRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: TdlcsRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class TdlcsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Tdlcs400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Tdlcs400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Tdlcs400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Tdlcs400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Tdlcs400ApplicationJsonErrorDescriptionEnum;
}

export enum Tdlcs401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Tdlcs401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Tdlcs401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Tdlcs401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Tdlcs401ApplicationJsonErrorDescriptionEnum;
}

export enum Tdlcs404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Tdlcs404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Tdlcs404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Tdlcs404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Tdlcs404ApplicationJsonErrorDescriptionEnum;
}

export enum Tdlcs500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Tdlcs500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Tdlcs500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Tdlcs500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Tdlcs500ApplicationJsonErrorDescriptionEnum;
}

export enum Tdlcs502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Tdlcs502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Tdlcs502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Tdlcs502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Tdlcs502ApplicationJsonErrorDescriptionEnum;
}

export enum Tdlcs503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Tdlcs503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Tdlcs503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Tdlcs503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Tdlcs503ApplicationJsonErrorDescriptionEnum;
}

export enum Tdlcs504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Tdlcs504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Tdlcs504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Tdlcs504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Tdlcs504ApplicationJsonErrorDescriptionEnum;
}


export class TdlcsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TdlcsRequestBody;

  @SpeakeasyMetadata()
  security: TdlcsSecurity;
}


export class TdlcsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tdlcs400ApplicationJsonObject?: Tdlcs400ApplicationJson;

  @SpeakeasyMetadata()
  tdlcs401ApplicationJsonObject?: Tdlcs401ApplicationJson;

  @SpeakeasyMetadata()
  tdlcs404ApplicationJsonObject?: Tdlcs404ApplicationJson;

  @SpeakeasyMetadata()
  tdlcs500ApplicationJsonObject?: Tdlcs500ApplicationJson;

  @SpeakeasyMetadata()
  tdlcs502ApplicationJsonObject?: Tdlcs502ApplicationJson;

  @SpeakeasyMetadata()
  tdlcs503ApplicationJsonObject?: Tdlcs503ApplicationJson;

  @SpeakeasyMetadata()
  tdlcs504ApplicationJsonObject?: Tdlcs504ApplicationJson;
}
