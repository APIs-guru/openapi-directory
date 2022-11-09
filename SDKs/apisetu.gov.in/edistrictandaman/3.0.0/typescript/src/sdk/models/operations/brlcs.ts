import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BrlcsRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateNumber" })
  certificateNumber: string;
}

export enum BrlcsRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class BrlcsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: BrlcsRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: BrlcsRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class BrlcsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class BrlcsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: BrlcsRequestBody;

  @Metadata()
  security: BrlcsSecurity;
}

export enum Brlcs400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Brlcs400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Brlcs400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Brlcs400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Brlcs400ApplicationJsonErrorDescriptionEnum;
}

export enum Brlcs401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Brlcs401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Brlcs401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Brlcs401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Brlcs401ApplicationJsonErrorDescriptionEnum;
}

export enum Brlcs404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Brlcs404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Brlcs404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Brlcs404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Brlcs404ApplicationJsonErrorDescriptionEnum;
}

export enum Brlcs500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Brlcs500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Brlcs500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Brlcs500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Brlcs500ApplicationJsonErrorDescriptionEnum;
}

export enum Brlcs502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Brlcs502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Brlcs502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Brlcs502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Brlcs502ApplicationJsonErrorDescriptionEnum;
}

export enum Brlcs503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Brlcs503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Brlcs503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Brlcs503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Brlcs503ApplicationJsonErrorDescriptionEnum;
}

export enum Brlcs504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Brlcs504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Brlcs504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Brlcs504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Brlcs504ApplicationJsonErrorDescriptionEnum;
}


export class BrlcsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  brlcs400ApplicationJsonObject?: Brlcs400ApplicationJson;

  @Metadata()
  brlcs401ApplicationJsonObject?: Brlcs401ApplicationJson;

  @Metadata()
  brlcs404ApplicationJsonObject?: Brlcs404ApplicationJson;

  @Metadata()
  brlcs500ApplicationJsonObject?: Brlcs500ApplicationJson;

  @Metadata()
  brlcs502ApplicationJsonObject?: Brlcs502ApplicationJson;

  @Metadata()
  brlcs503ApplicationJsonObject?: Brlcs503ApplicationJson;

  @Metadata()
  brlcs504ApplicationJsonObject?: Brlcs504ApplicationJson;
}
