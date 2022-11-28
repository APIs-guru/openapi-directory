import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SicrdRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CERTNO" })
  certno: string;

  @SpeakeasyMetadata({ data: "json, name=DOB" })
  dob: string;
}

export enum SicrdRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class SicrdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: SicrdRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: SicrdRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class SicrdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Sicrd400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Sicrd400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Sicrd400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sicrd400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicrd400ApplicationJsonErrorDescriptionEnum;
}

export enum Sicrd401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Sicrd401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Sicrd401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sicrd401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicrd401ApplicationJsonErrorDescriptionEnum;
}

export enum Sicrd404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Sicrd404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Sicrd404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sicrd404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicrd404ApplicationJsonErrorDescriptionEnum;
}

export enum Sicrd500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Sicrd500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Sicrd500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sicrd500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicrd500ApplicationJsonErrorDescriptionEnum;
}

export enum Sicrd502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Sicrd502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Sicrd502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sicrd502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicrd502ApplicationJsonErrorDescriptionEnum;
}

export enum Sicrd503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Sicrd503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Sicrd503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sicrd503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicrd503ApplicationJsonErrorDescriptionEnum;
}

export enum Sicrd504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Sicrd504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Sicrd504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sicrd504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicrd504ApplicationJsonErrorDescriptionEnum;
}


export class SicrdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SicrdRequestBody;

  @SpeakeasyMetadata()
  security: SicrdSecurity;
}


export class SicrdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  sicrd400ApplicationJsonObject?: Sicrd400ApplicationJson;

  @SpeakeasyMetadata()
  sicrd401ApplicationJsonObject?: Sicrd401ApplicationJson;

  @SpeakeasyMetadata()
  sicrd404ApplicationJsonObject?: Sicrd404ApplicationJson;

  @SpeakeasyMetadata()
  sicrd500ApplicationJsonObject?: Sicrd500ApplicationJson;

  @SpeakeasyMetadata()
  sicrd502ApplicationJsonObject?: Sicrd502ApplicationJson;

  @SpeakeasyMetadata()
  sicrd503ApplicationJsonObject?: Sicrd503ApplicationJson;

  @SpeakeasyMetadata()
  sicrd504ApplicationJsonObject?: Sicrd504ApplicationJson;
}
