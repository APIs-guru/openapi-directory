import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UncrdRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DOB" })
  dob: string;

  @SpeakeasyMetadata({ data: "json, name=UAN" })
  uan: string;
}

export enum UncrdRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class UncrdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: UncrdRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: UncrdRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class UncrdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Uncrd400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Uncrd400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Uncrd400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Uncrd400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Uncrd400ApplicationJsonErrorDescriptionEnum;
}

export enum Uncrd401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Uncrd401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Uncrd401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Uncrd401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Uncrd401ApplicationJsonErrorDescriptionEnum;
}

export enum Uncrd404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Uncrd404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Uncrd404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Uncrd404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Uncrd404ApplicationJsonErrorDescriptionEnum;
}

export enum Uncrd500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Uncrd500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Uncrd500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Uncrd500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Uncrd500ApplicationJsonErrorDescriptionEnum;
}

export enum Uncrd502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Uncrd502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Uncrd502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Uncrd502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Uncrd502ApplicationJsonErrorDescriptionEnum;
}

export enum Uncrd503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Uncrd503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Uncrd503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Uncrd503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Uncrd503ApplicationJsonErrorDescriptionEnum;
}

export enum Uncrd504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Uncrd504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Uncrd504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Uncrd504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Uncrd504ApplicationJsonErrorDescriptionEnum;
}


export class UncrdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UncrdRequestBody;

  @SpeakeasyMetadata()
  security: UncrdSecurity;
}


export class UncrdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uncrd400ApplicationJsonObject?: Uncrd400ApplicationJson;

  @SpeakeasyMetadata()
  uncrd401ApplicationJsonObject?: Uncrd401ApplicationJson;

  @SpeakeasyMetadata()
  uncrd404ApplicationJsonObject?: Uncrd404ApplicationJson;

  @SpeakeasyMetadata()
  uncrd500ApplicationJsonObject?: Uncrd500ApplicationJson;

  @SpeakeasyMetadata()
  uncrd502ApplicationJsonObject?: Uncrd502ApplicationJson;

  @SpeakeasyMetadata()
  uncrd503ApplicationJsonObject?: Uncrd503ApplicationJson;

  @SpeakeasyMetadata()
  uncrd504ApplicationJsonObject?: Uncrd504ApplicationJson;
}
