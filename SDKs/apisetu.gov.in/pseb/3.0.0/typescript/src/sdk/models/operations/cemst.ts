import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CemstRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=UID" })
  uid: string;

  @SpeakeasyMetadata({ data: "json, name=rollno" })
  rollno: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year: string;
}

export enum CemstRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class CemstRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: CemstRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: CemstRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class CemstSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Cemst400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Cemst400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Cemst400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cemst400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cemst400ApplicationJsonErrorDescriptionEnum;
}

export enum Cemst401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Cemst401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Cemst401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cemst401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cemst401ApplicationJsonErrorDescriptionEnum;
}

export enum Cemst404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Cemst404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Cemst404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cemst404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cemst404ApplicationJsonErrorDescriptionEnum;
}

export enum Cemst500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Cemst500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Cemst500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cemst500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cemst500ApplicationJsonErrorDescriptionEnum;
}

export enum Cemst502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Cemst502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Cemst502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cemst502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cemst502ApplicationJsonErrorDescriptionEnum;
}

export enum Cemst503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Cemst503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Cemst503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cemst503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cemst503ApplicationJsonErrorDescriptionEnum;
}

export enum Cemst504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Cemst504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Cemst504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cemst504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cemst504ApplicationJsonErrorDescriptionEnum;
}


export class CemstRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CemstRequestBody;

  @SpeakeasyMetadata()
  security: CemstSecurity;
}


export class CemstResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cemst400ApplicationJsonObject?: Cemst400ApplicationJson;

  @SpeakeasyMetadata()
  cemst401ApplicationJsonObject?: Cemst401ApplicationJson;

  @SpeakeasyMetadata()
  cemst404ApplicationJsonObject?: Cemst404ApplicationJson;

  @SpeakeasyMetadata()
  cemst500ApplicationJsonObject?: Cemst500ApplicationJson;

  @SpeakeasyMetadata()
  cemst502ApplicationJsonObject?: Cemst502ApplicationJson;

  @SpeakeasyMetadata()
  cemst503ApplicationJsonObject?: Cemst503ApplicationJson;

  @SpeakeasyMetadata()
  cemst504ApplicationJsonObject?: Cemst504ApplicationJson;
}
