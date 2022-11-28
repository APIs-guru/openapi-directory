import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WwcerRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aplno" })
  aplno: string;

  @SpeakeasyMetadata({ data: "json, name=certno" })
  certno: string;

  @SpeakeasyMetadata({ data: "json, name=sccd" })
  sccd: string;
}

export enum WwcerRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class WwcerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: WwcerRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: WwcerRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class WwcerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Wwcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Wwcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Wwcer400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Wwcer400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Wwcer400ApplicationJsonErrorDescriptionEnum;
}

export enum Wwcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Wwcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Wwcer401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Wwcer401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Wwcer401ApplicationJsonErrorDescriptionEnum;
}

export enum Wwcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Wwcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Wwcer404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Wwcer404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Wwcer404ApplicationJsonErrorDescriptionEnum;
}

export enum Wwcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Wwcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Wwcer500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Wwcer500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Wwcer500ApplicationJsonErrorDescriptionEnum;
}

export enum Wwcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Wwcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Wwcer502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Wwcer502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Wwcer502ApplicationJsonErrorDescriptionEnum;
}

export enum Wwcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Wwcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Wwcer503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Wwcer503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Wwcer503ApplicationJsonErrorDescriptionEnum;
}

export enum Wwcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Wwcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Wwcer504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Wwcer504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Wwcer504ApplicationJsonErrorDescriptionEnum;
}


export class WwcerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: WwcerRequestBody;

  @SpeakeasyMetadata()
  security: WwcerSecurity;
}


export class WwcerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  wwcer400ApplicationJsonObject?: Wwcer400ApplicationJson;

  @SpeakeasyMetadata()
  wwcer401ApplicationJsonObject?: Wwcer401ApplicationJson;

  @SpeakeasyMetadata()
  wwcer404ApplicationJsonObject?: Wwcer404ApplicationJson;

  @SpeakeasyMetadata()
  wwcer500ApplicationJsonObject?: Wwcer500ApplicationJson;

  @SpeakeasyMetadata()
  wwcer502ApplicationJsonObject?: Wwcer502ApplicationJson;

  @SpeakeasyMetadata()
  wwcer503ApplicationJsonObject?: Wwcer503ApplicationJson;

  @SpeakeasyMetadata()
  wwcer504ApplicationJsonObject?: Wwcer504ApplicationJson;
}
