import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PalcsRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationNo" })
  applicationNo: string;

  @Metadata({ data: "json, name=licenseNo" })
  licenseNo: string;
}

export enum PalcsRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class PalcsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: PalcsRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: PalcsRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class PalcsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class PalcsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PalcsRequestBody;

  @Metadata()
  security: PalcsSecurity;
}

export enum Palcs400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Palcs400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Palcs400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Palcs400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Palcs400ApplicationJsonErrorDescriptionEnum;
}

export enum Palcs401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Palcs401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Palcs401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Palcs401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Palcs401ApplicationJsonErrorDescriptionEnum;
}

export enum Palcs404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Palcs404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Palcs404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Palcs404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Palcs404ApplicationJsonErrorDescriptionEnum;
}

export enum Palcs500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Palcs500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Palcs500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Palcs500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Palcs500ApplicationJsonErrorDescriptionEnum;
}

export enum Palcs502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Palcs502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Palcs502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Palcs502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Palcs502ApplicationJsonErrorDescriptionEnum;
}

export enum Palcs503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Palcs503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Palcs503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Palcs503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Palcs503ApplicationJsonErrorDescriptionEnum;
}

export enum Palcs504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Palcs504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Palcs504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Palcs504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Palcs504ApplicationJsonErrorDescriptionEnum;
}


export class PalcsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  palcs400ApplicationJsonObject?: Palcs400ApplicationJson;

  @Metadata()
  palcs401ApplicationJsonObject?: Palcs401ApplicationJson;

  @Metadata()
  palcs404ApplicationJsonObject?: Palcs404ApplicationJson;

  @Metadata()
  palcs500ApplicationJsonObject?: Palcs500ApplicationJson;

  @Metadata()
  palcs502ApplicationJsonObject?: Palcs502ApplicationJson;

  @Metadata()
  palcs503ApplicationJsonObject?: Palcs503ApplicationJson;

  @Metadata()
  palcs504ApplicationJsonObject?: Palcs504ApplicationJson;
}
