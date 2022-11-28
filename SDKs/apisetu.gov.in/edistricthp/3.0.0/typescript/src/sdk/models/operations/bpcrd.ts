import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BpcrdRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UDF1" })
  udf1: string;
}

export enum BpcrdRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class BpcrdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: BpcrdRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: BpcrdRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class BpcrdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Bpcrd400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Bpcrd400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Bpcrd400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Bpcrd400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Bpcrd400ApplicationJsonErrorDescriptionEnum;
}

export enum Bpcrd401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Bpcrd401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Bpcrd401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Bpcrd401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Bpcrd401ApplicationJsonErrorDescriptionEnum;
}

export enum Bpcrd404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Bpcrd404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Bpcrd404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Bpcrd404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Bpcrd404ApplicationJsonErrorDescriptionEnum;
}

export enum Bpcrd500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Bpcrd500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Bpcrd500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Bpcrd500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Bpcrd500ApplicationJsonErrorDescriptionEnum;
}

export enum Bpcrd502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Bpcrd502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Bpcrd502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Bpcrd502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Bpcrd502ApplicationJsonErrorDescriptionEnum;
}

export enum Bpcrd503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Bpcrd503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Bpcrd503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Bpcrd503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Bpcrd503ApplicationJsonErrorDescriptionEnum;
}

export enum Bpcrd504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Bpcrd504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Bpcrd504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Bpcrd504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Bpcrd504ApplicationJsonErrorDescriptionEnum;
}


export class BpcrdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: BpcrdRequestBody;

  @SpeakeasyMetadata()
  security: BpcrdSecurity;
}


export class BpcrdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  bpcrd400ApplicationJsonObject?: Bpcrd400ApplicationJson;

  @SpeakeasyMetadata()
  bpcrd401ApplicationJsonObject?: Bpcrd401ApplicationJson;

  @SpeakeasyMetadata()
  bpcrd404ApplicationJsonObject?: Bpcrd404ApplicationJson;

  @SpeakeasyMetadata()
  bpcrd500ApplicationJsonObject?: Bpcrd500ApplicationJson;

  @SpeakeasyMetadata()
  bpcrd502ApplicationJsonObject?: Bpcrd502ApplicationJson;

  @SpeakeasyMetadata()
  bpcrd503ApplicationJsonObject?: Bpcrd503ApplicationJson;

  @SpeakeasyMetadata()
  bpcrd504ApplicationJsonObject?: Bpcrd504ApplicationJson;
}
