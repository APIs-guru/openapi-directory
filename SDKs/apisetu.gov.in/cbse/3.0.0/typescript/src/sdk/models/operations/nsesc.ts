import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NsescRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=rollno" })
  rollno: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year: string;
}

export enum NsescRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class NsescRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: NsescRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: NsescRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class NsescSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Nsesc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Nsesc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Nsesc400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nsesc400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nsesc400ApplicationJsonErrorDescriptionEnum;
}

export enum Nsesc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Nsesc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Nsesc401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nsesc401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nsesc401ApplicationJsonErrorDescriptionEnum;
}

export enum Nsesc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Nsesc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Nsesc404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nsesc404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nsesc404ApplicationJsonErrorDescriptionEnum;
}

export enum Nsesc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Nsesc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Nsesc500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nsesc500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nsesc500ApplicationJsonErrorDescriptionEnum;
}

export enum Nsesc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Nsesc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Nsesc502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nsesc502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nsesc502ApplicationJsonErrorDescriptionEnum;
}

export enum Nsesc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Nsesc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Nsesc503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nsesc503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nsesc503ApplicationJsonErrorDescriptionEnum;
}

export enum Nsesc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Nsesc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Nsesc504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nsesc504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nsesc504ApplicationJsonErrorDescriptionEnum;
}


export class NsescRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: NsescRequestBody;

  @SpeakeasyMetadata()
  security: NsescSecurity;
}


export class NsescResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  nsesc400ApplicationJsonObject?: Nsesc400ApplicationJson;

  @SpeakeasyMetadata()
  nsesc401ApplicationJsonObject?: Nsesc401ApplicationJson;

  @SpeakeasyMetadata()
  nsesc404ApplicationJsonObject?: Nsesc404ApplicationJson;

  @SpeakeasyMetadata()
  nsesc500ApplicationJsonObject?: Nsesc500ApplicationJson;

  @SpeakeasyMetadata()
  nsesc502ApplicationJsonObject?: Nsesc502ApplicationJson;

  @SpeakeasyMetadata()
  nsesc503ApplicationJsonObject?: Nsesc503ApplicationJson;

  @SpeakeasyMetadata()
  nsesc504ApplicationJsonObject?: Nsesc504ApplicationJson;
}
