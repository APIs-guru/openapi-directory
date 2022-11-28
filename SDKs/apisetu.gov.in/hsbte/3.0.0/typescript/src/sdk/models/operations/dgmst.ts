import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DgmstRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=RROLL" })
  rroll: string;

  @SpeakeasyMetadata({ data: "json, name=SEM" })
  sem: string;
}

export enum DgmstRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class DgmstRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: DgmstRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: DgmstRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class DgmstSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Dgmst400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Dgmst400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Dgmst400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Dgmst400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Dgmst400ApplicationJsonErrorDescriptionEnum;
}

export enum Dgmst401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Dgmst401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Dgmst401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Dgmst401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Dgmst401ApplicationJsonErrorDescriptionEnum;
}

export enum Dgmst404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Dgmst404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Dgmst404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Dgmst404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Dgmst404ApplicationJsonErrorDescriptionEnum;
}

export enum Dgmst500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Dgmst500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Dgmst500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Dgmst500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Dgmst500ApplicationJsonErrorDescriptionEnum;
}

export enum Dgmst502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Dgmst502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Dgmst502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Dgmst502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Dgmst502ApplicationJsonErrorDescriptionEnum;
}

export enum Dgmst503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Dgmst503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Dgmst503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Dgmst503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Dgmst503ApplicationJsonErrorDescriptionEnum;
}

export enum Dgmst504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Dgmst504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Dgmst504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Dgmst504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Dgmst504ApplicationJsonErrorDescriptionEnum;
}


export class DgmstRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: DgmstRequestBody;

  @SpeakeasyMetadata()
  security: DgmstSecurity;
}


export class DgmstResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dgmst400ApplicationJsonObject?: Dgmst400ApplicationJson;

  @SpeakeasyMetadata()
  dgmst401ApplicationJsonObject?: Dgmst401ApplicationJson;

  @SpeakeasyMetadata()
  dgmst404ApplicationJsonObject?: Dgmst404ApplicationJson;

  @SpeakeasyMetadata()
  dgmst500ApplicationJsonObject?: Dgmst500ApplicationJson;

  @SpeakeasyMetadata()
  dgmst502ApplicationJsonObject?: Dgmst502ApplicationJson;

  @SpeakeasyMetadata()
  dgmst503ApplicationJsonObject?: Dgmst503ApplicationJson;

  @SpeakeasyMetadata()
  dgmst504ApplicationJsonObject?: Dgmst504ApplicationJson;
}
