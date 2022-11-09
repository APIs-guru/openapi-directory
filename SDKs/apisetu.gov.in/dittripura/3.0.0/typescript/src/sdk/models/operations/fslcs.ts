import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FslcsRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=RefNo" })
  refNo: string;

  @Metadata({ data: "json, name=TokenNo" })
  tokenNo: string;
}

export enum FslcsRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class FslcsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: FslcsRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: FslcsRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class FslcsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class FslcsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: FslcsRequestBody;

  @Metadata()
  security: FslcsSecurity;
}

export enum Fslcs400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Fslcs400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Fslcs400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Fslcs400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Fslcs400ApplicationJsonErrorDescriptionEnum;
}

export enum Fslcs401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Fslcs401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Fslcs401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Fslcs401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Fslcs401ApplicationJsonErrorDescriptionEnum;
}

export enum Fslcs404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Fslcs404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Fslcs404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Fslcs404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Fslcs404ApplicationJsonErrorDescriptionEnum;
}

export enum Fslcs500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Fslcs500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Fslcs500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Fslcs500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Fslcs500ApplicationJsonErrorDescriptionEnum;
}

export enum Fslcs502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Fslcs502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Fslcs502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Fslcs502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Fslcs502ApplicationJsonErrorDescriptionEnum;
}

export enum Fslcs503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Fslcs503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Fslcs503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Fslcs503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Fslcs503ApplicationJsonErrorDescriptionEnum;
}

export enum Fslcs504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Fslcs504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Fslcs504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Fslcs504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Fslcs504ApplicationJsonErrorDescriptionEnum;
}


export class FslcsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  fslcs400ApplicationJsonObject?: Fslcs400ApplicationJson;

  @Metadata()
  fslcs401ApplicationJsonObject?: Fslcs401ApplicationJson;

  @Metadata()
  fslcs404ApplicationJsonObject?: Fslcs404ApplicationJson;

  @Metadata()
  fslcs500ApplicationJsonObject?: Fslcs500ApplicationJson;

  @Metadata()
  fslcs502ApplicationJsonObject?: Fslcs502ApplicationJson;

  @Metadata()
  fslcs503ApplicationJsonObject?: Fslcs503ApplicationJson;

  @Metadata()
  fslcs504ApplicationJsonObject?: Fslcs504ApplicationJson;
}
