import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AecmwRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UDF1" })
  udf1: string;
}

export enum AecmwRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class AecmwRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: AecmwRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: AecmwRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class AecmwSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Aecmw400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Aecmw400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Aecmw400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Aecmw400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Aecmw400ApplicationJsonErrorDescriptionEnum;
}

export enum Aecmw401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Aecmw401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Aecmw401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Aecmw401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Aecmw401ApplicationJsonErrorDescriptionEnum;
}

export enum Aecmw404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Aecmw404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Aecmw404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Aecmw404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Aecmw404ApplicationJsonErrorDescriptionEnum;
}

export enum Aecmw500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Aecmw500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Aecmw500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Aecmw500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Aecmw500ApplicationJsonErrorDescriptionEnum;
}

export enum Aecmw502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Aecmw502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Aecmw502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Aecmw502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Aecmw502ApplicationJsonErrorDescriptionEnum;
}

export enum Aecmw503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Aecmw503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Aecmw503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Aecmw503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Aecmw503ApplicationJsonErrorDescriptionEnum;
}

export enum Aecmw504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Aecmw504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Aecmw504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Aecmw504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Aecmw504ApplicationJsonErrorDescriptionEnum;
}


export class AecmwRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AecmwRequestBody;

  @SpeakeasyMetadata()
  security: AecmwSecurity;
}


export class AecmwResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  aecmw400ApplicationJsonObject?: Aecmw400ApplicationJson;

  @SpeakeasyMetadata()
  aecmw401ApplicationJsonObject?: Aecmw401ApplicationJson;

  @SpeakeasyMetadata()
  aecmw404ApplicationJsonObject?: Aecmw404ApplicationJson;

  @SpeakeasyMetadata()
  aecmw500ApplicationJsonObject?: Aecmw500ApplicationJson;

  @SpeakeasyMetadata()
  aecmw502ApplicationJsonObject?: Aecmw502ApplicationJson;

  @SpeakeasyMetadata()
  aecmw503ApplicationJsonObject?: Aecmw503ApplicationJson;

  @SpeakeasyMetadata()
  aecmw504ApplicationJsonObject?: Aecmw504ApplicationJson;
}
