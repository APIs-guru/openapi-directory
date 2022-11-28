import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class HmipcRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=policyno" })
  policyno: string;
}

export enum HmipcRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class HmipcRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: HmipcRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: HmipcRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class HmipcSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Hmipc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Hmipc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Hmipc400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Hmipc400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Hmipc400ApplicationJsonErrorDescriptionEnum;
}

export enum Hmipc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Hmipc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Hmipc401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Hmipc401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Hmipc401ApplicationJsonErrorDescriptionEnum;
}

export enum Hmipc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Hmipc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Hmipc404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Hmipc404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Hmipc404ApplicationJsonErrorDescriptionEnum;
}

export enum Hmipc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Hmipc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Hmipc500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Hmipc500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Hmipc500ApplicationJsonErrorDescriptionEnum;
}

export enum Hmipc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Hmipc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Hmipc502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Hmipc502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Hmipc502ApplicationJsonErrorDescriptionEnum;
}

export enum Hmipc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Hmipc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Hmipc503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Hmipc503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Hmipc503ApplicationJsonErrorDescriptionEnum;
}

export enum Hmipc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Hmipc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Hmipc504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Hmipc504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Hmipc504ApplicationJsonErrorDescriptionEnum;
}


export class HmipcRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: HmipcRequestBody;

  @SpeakeasyMetadata()
  security: HmipcSecurity;
}


export class HmipcResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  hmipc400ApplicationJsonObject?: Hmipc400ApplicationJson;

  @SpeakeasyMetadata()
  hmipc401ApplicationJsonObject?: Hmipc401ApplicationJson;

  @SpeakeasyMetadata()
  hmipc404ApplicationJsonObject?: Hmipc404ApplicationJson;

  @SpeakeasyMetadata()
  hmipc500ApplicationJsonObject?: Hmipc500ApplicationJson;

  @SpeakeasyMetadata()
  hmipc502ApplicationJsonObject?: Hmipc502ApplicationJson;

  @SpeakeasyMetadata()
  hmipc503ApplicationJsonObject?: Hmipc503ApplicationJson;

  @SpeakeasyMetadata()
  hmipc504ApplicationJsonObject?: Hmipc504ApplicationJson;
}
