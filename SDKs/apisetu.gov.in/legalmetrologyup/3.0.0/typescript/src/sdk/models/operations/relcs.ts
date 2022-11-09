import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RelcsRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationNo" })
  applicationNo: string;

  @Metadata({ data: "json, name=licenseNo" })
  licenseNo: string;
}

export enum RelcsRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class RelcsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: RelcsRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: RelcsRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class RelcsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class RelcsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: RelcsRequestBody;

  @Metadata()
  security: RelcsSecurity;
}

export enum Relcs400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Relcs400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Relcs400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Relcs400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Relcs400ApplicationJsonErrorDescriptionEnum;
}

export enum Relcs401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Relcs401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Relcs401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Relcs401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Relcs401ApplicationJsonErrorDescriptionEnum;
}

export enum Relcs404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Relcs404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Relcs404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Relcs404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Relcs404ApplicationJsonErrorDescriptionEnum;
}

export enum Relcs500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Relcs500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Relcs500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Relcs500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Relcs500ApplicationJsonErrorDescriptionEnum;
}

export enum Relcs502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Relcs502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Relcs502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Relcs502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Relcs502ApplicationJsonErrorDescriptionEnum;
}

export enum Relcs503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Relcs503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Relcs503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Relcs503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Relcs503ApplicationJsonErrorDescriptionEnum;
}

export enum Relcs504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Relcs504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Relcs504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Relcs504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Relcs504ApplicationJsonErrorDescriptionEnum;
}


export class RelcsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  relcs400ApplicationJsonObject?: Relcs400ApplicationJson;

  @Metadata()
  relcs401ApplicationJsonObject?: Relcs401ApplicationJson;

  @Metadata()
  relcs404ApplicationJsonObject?: Relcs404ApplicationJson;

  @Metadata()
  relcs500ApplicationJsonObject?: Relcs500ApplicationJson;

  @Metadata()
  relcs502ApplicationJsonObject?: Relcs502ApplicationJson;

  @Metadata()
  relcs503ApplicationJsonObject?: Relcs503ApplicationJson;

  @Metadata()
  relcs504ApplicationJsonObject?: Relcs504ApplicationJson;
}
