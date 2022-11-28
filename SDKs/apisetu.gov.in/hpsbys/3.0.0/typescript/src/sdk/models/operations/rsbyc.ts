import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RsbycRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UID" })
  uid: string;
}

export enum RsbycRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class RsbycRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: RsbycRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: RsbycRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class RsbycSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Rsbyc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Rsbyc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Rsbyc400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Rsbyc400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Rsbyc400ApplicationJsonErrorDescriptionEnum;
}

export enum Rsbyc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Rsbyc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Rsbyc401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Rsbyc401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Rsbyc401ApplicationJsonErrorDescriptionEnum;
}

export enum Rsbyc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Rsbyc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Rsbyc404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Rsbyc404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Rsbyc404ApplicationJsonErrorDescriptionEnum;
}

export enum Rsbyc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Rsbyc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Rsbyc500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Rsbyc500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Rsbyc500ApplicationJsonErrorDescriptionEnum;
}

export enum Rsbyc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Rsbyc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Rsbyc502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Rsbyc502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Rsbyc502ApplicationJsonErrorDescriptionEnum;
}

export enum Rsbyc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Rsbyc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Rsbyc503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Rsbyc503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Rsbyc503ApplicationJsonErrorDescriptionEnum;
}

export enum Rsbyc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Rsbyc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Rsbyc504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Rsbyc504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Rsbyc504ApplicationJsonErrorDescriptionEnum;
}


export class RsbycRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: RsbycRequestBody;

  @SpeakeasyMetadata()
  security: RsbycSecurity;
}


export class RsbycResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rsbyc400ApplicationJsonObject?: Rsbyc400ApplicationJson;

  @SpeakeasyMetadata()
  rsbyc401ApplicationJsonObject?: Rsbyc401ApplicationJson;

  @SpeakeasyMetadata()
  rsbyc404ApplicationJsonObject?: Rsbyc404ApplicationJson;

  @SpeakeasyMetadata()
  rsbyc500ApplicationJsonObject?: Rsbyc500ApplicationJson;

  @SpeakeasyMetadata()
  rsbyc502ApplicationJsonObject?: Rsbyc502ApplicationJson;

  @SpeakeasyMetadata()
  rsbyc503ApplicationJsonObject?: Rsbyc503ApplicationJson;

  @SpeakeasyMetadata()
  rsbyc504ApplicationJsonObject?: Rsbyc504ApplicationJson;
}
