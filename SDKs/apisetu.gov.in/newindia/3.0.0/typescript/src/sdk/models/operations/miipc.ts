import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MiipcRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=UDF1" })
  udf1: string;

  @SpeakeasyMetadata({ data: "json, name=UDF2" })
  udf2: string;

  @SpeakeasyMetadata({ data: "json, name=UDF3" })
  udf3: string;
}

export enum MiipcRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class MiipcRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: MiipcRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: MiipcRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class MiipcSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Miipc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Miipc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Miipc400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Miipc400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Miipc400ApplicationJsonErrorDescriptionEnum;
}

export enum Miipc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Miipc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Miipc401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Miipc401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Miipc401ApplicationJsonErrorDescriptionEnum;
}

export enum Miipc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Miipc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Miipc404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Miipc404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Miipc404ApplicationJsonErrorDescriptionEnum;
}

export enum Miipc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Miipc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Miipc500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Miipc500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Miipc500ApplicationJsonErrorDescriptionEnum;
}

export enum Miipc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Miipc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Miipc502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Miipc502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Miipc502ApplicationJsonErrorDescriptionEnum;
}

export enum Miipc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Miipc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Miipc503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Miipc503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Miipc503ApplicationJsonErrorDescriptionEnum;
}

export enum Miipc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Miipc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Miipc504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Miipc504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Miipc504ApplicationJsonErrorDescriptionEnum;
}


export class MiipcRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: MiipcRequestBody;

  @SpeakeasyMetadata()
  security: MiipcSecurity;
}


export class MiipcResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  miipc400ApplicationJsonObject?: Miipc400ApplicationJson;

  @SpeakeasyMetadata()
  miipc401ApplicationJsonObject?: Miipc401ApplicationJson;

  @SpeakeasyMetadata()
  miipc404ApplicationJsonObject?: Miipc404ApplicationJson;

  @SpeakeasyMetadata()
  miipc500ApplicationJsonObject?: Miipc500ApplicationJson;

  @SpeakeasyMetadata()
  miipc502ApplicationJsonObject?: Miipc502ApplicationJson;

  @SpeakeasyMetadata()
  miipc503ApplicationJsonObject?: Miipc503ApplicationJson;

  @SpeakeasyMetadata()
  miipc504ApplicationJsonObject?: Miipc504ApplicationJson;
}
