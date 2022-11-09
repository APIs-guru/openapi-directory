import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TdlcsRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentNumber" })
  documentNumber: string;
}

export enum TdlcsRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class TdlcsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: TdlcsRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: TdlcsRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class TdlcsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class TdlcsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: TdlcsRequestBody;

  @Metadata()
  security: TdlcsSecurity;
}

export enum Tdlcs400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Tdlcs400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Tdlcs400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tdlcs400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tdlcs400ApplicationJsonErrorDescriptionEnum;
}

export enum Tdlcs401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Tdlcs401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Tdlcs401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tdlcs401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tdlcs401ApplicationJsonErrorDescriptionEnum;
}

export enum Tdlcs404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Tdlcs404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Tdlcs404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tdlcs404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tdlcs404ApplicationJsonErrorDescriptionEnum;
}

export enum Tdlcs500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Tdlcs500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Tdlcs500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tdlcs500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tdlcs500ApplicationJsonErrorDescriptionEnum;
}

export enum Tdlcs502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Tdlcs502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Tdlcs502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tdlcs502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tdlcs502ApplicationJsonErrorDescriptionEnum;
}

export enum Tdlcs503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Tdlcs503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Tdlcs503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tdlcs503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tdlcs503ApplicationJsonErrorDescriptionEnum;
}

export enum Tdlcs504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Tdlcs504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Tdlcs504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tdlcs504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tdlcs504ApplicationJsonErrorDescriptionEnum;
}


export class TdlcsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tdlcs400ApplicationJsonObject?: Tdlcs400ApplicationJson;

  @Metadata()
  tdlcs401ApplicationJsonObject?: Tdlcs401ApplicationJson;

  @Metadata()
  tdlcs404ApplicationJsonObject?: Tdlcs404ApplicationJson;

  @Metadata()
  tdlcs500ApplicationJsonObject?: Tdlcs500ApplicationJson;

  @Metadata()
  tdlcs502ApplicationJsonObject?: Tdlcs502ApplicationJson;

  @Metadata()
  tdlcs503ApplicationJsonObject?: Tdlcs503ApplicationJson;

  @Metadata()
  tdlcs504ApplicationJsonObject?: Tdlcs504ApplicationJson;
}
