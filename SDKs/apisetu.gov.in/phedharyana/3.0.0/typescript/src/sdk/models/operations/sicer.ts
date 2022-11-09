import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SicerRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=_name" })
  name: string;

  @Metadata({ data: "json, name=consumer_id" })
  consumerId: string;
}

export enum SicerRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class SicerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: SicerRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: SicerRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class SicerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class SicerRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: SicerRequestBody;

  @Metadata()
  security: SicerSecurity;
}

export enum Sicer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Sicer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Sicer400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Sicer400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicer400ApplicationJsonErrorDescriptionEnum;
}

export enum Sicer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Sicer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Sicer401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Sicer401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicer401ApplicationJsonErrorDescriptionEnum;
}

export enum Sicer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Sicer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Sicer404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Sicer404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicer404ApplicationJsonErrorDescriptionEnum;
}

export enum Sicer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Sicer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Sicer500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Sicer500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicer500ApplicationJsonErrorDescriptionEnum;
}

export enum Sicer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Sicer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Sicer502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Sicer502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicer502ApplicationJsonErrorDescriptionEnum;
}

export enum Sicer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Sicer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Sicer503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Sicer503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicer503ApplicationJsonErrorDescriptionEnum;
}

export enum Sicer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Sicer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Sicer504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Sicer504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicer504ApplicationJsonErrorDescriptionEnum;
}


export class SicerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  sicer400ApplicationJsonObject?: Sicer400ApplicationJson;

  @Metadata()
  sicer401ApplicationJsonObject?: Sicer401ApplicationJson;

  @Metadata()
  sicer404ApplicationJsonObject?: Sicer404ApplicationJson;

  @Metadata()
  sicer500ApplicationJsonObject?: Sicer500ApplicationJson;

  @Metadata()
  sicer502ApplicationJsonObject?: Sicer502ApplicationJson;

  @Metadata()
  sicer503ApplicationJsonObject?: Sicer503ApplicationJson;

  @Metadata()
  sicer504ApplicationJsonObject?: Sicer504ApplicationJson;
}
