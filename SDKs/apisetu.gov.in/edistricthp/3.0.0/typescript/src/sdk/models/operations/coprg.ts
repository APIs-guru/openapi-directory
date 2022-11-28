import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CoprgRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UDF1" })
  udf1: string;
}

export enum CoprgRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class CoprgRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: CoprgRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: CoprgRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class CoprgSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Coprg400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Coprg400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Coprg400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Coprg400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Coprg400ApplicationJsonErrorDescriptionEnum;
}

export enum Coprg401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Coprg401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Coprg401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Coprg401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Coprg401ApplicationJsonErrorDescriptionEnum;
}

export enum Coprg404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Coprg404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Coprg404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Coprg404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Coprg404ApplicationJsonErrorDescriptionEnum;
}

export enum Coprg500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Coprg500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Coprg500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Coprg500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Coprg500ApplicationJsonErrorDescriptionEnum;
}

export enum Coprg502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Coprg502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Coprg502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Coprg502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Coprg502ApplicationJsonErrorDescriptionEnum;
}

export enum Coprg503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Coprg503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Coprg503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Coprg503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Coprg503ApplicationJsonErrorDescriptionEnum;
}

export enum Coprg504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Coprg504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Coprg504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Coprg504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Coprg504ApplicationJsonErrorDescriptionEnum;
}


export class CoprgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CoprgRequestBody;

  @SpeakeasyMetadata()
  security: CoprgSecurity;
}


export class CoprgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  coprg400ApplicationJsonObject?: Coprg400ApplicationJson;

  @SpeakeasyMetadata()
  coprg401ApplicationJsonObject?: Coprg401ApplicationJson;

  @SpeakeasyMetadata()
  coprg404ApplicationJsonObject?: Coprg404ApplicationJson;

  @SpeakeasyMetadata()
  coprg500ApplicationJsonObject?: Coprg500ApplicationJson;

  @SpeakeasyMetadata()
  coprg502ApplicationJsonObject?: Coprg502ApplicationJson;

  @SpeakeasyMetadata()
  coprg503ApplicationJsonObject?: Coprg503ApplicationJson;

  @SpeakeasyMetadata()
  coprg504ApplicationJsonObject?: Coprg504ApplicationJson;
}
