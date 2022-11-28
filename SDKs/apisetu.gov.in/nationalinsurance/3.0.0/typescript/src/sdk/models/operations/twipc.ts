import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TwipcRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer_Id" })
  customerId: string;

  @SpeakeasyMetadata({ data: "json, name=policy_Number" })
  policyNumber: string;

  @SpeakeasyMetadata({ data: "json, name=policy_StartDate" })
  policyStartDate: string;
}

export enum TwipcRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class TwipcRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: TwipcRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: TwipcRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class TwipcSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Twipc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Twipc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Twipc400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Twipc400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Twipc400ApplicationJsonErrorDescriptionEnum;
}

export enum Twipc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Twipc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Twipc401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Twipc401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Twipc401ApplicationJsonErrorDescriptionEnum;
}

export enum Twipc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Twipc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Twipc404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Twipc404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Twipc404ApplicationJsonErrorDescriptionEnum;
}

export enum Twipc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Twipc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Twipc500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Twipc500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Twipc500ApplicationJsonErrorDescriptionEnum;
}

export enum Twipc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Twipc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Twipc502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Twipc502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Twipc502ApplicationJsonErrorDescriptionEnum;
}

export enum Twipc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Twipc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Twipc503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Twipc503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Twipc503ApplicationJsonErrorDescriptionEnum;
}

export enum Twipc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Twipc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Twipc504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Twipc504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Twipc504ApplicationJsonErrorDescriptionEnum;
}


export class TwipcRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TwipcRequestBody;

  @SpeakeasyMetadata()
  security: TwipcSecurity;
}


export class TwipcResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  twipc400ApplicationJsonObject?: Twipc400ApplicationJson;

  @SpeakeasyMetadata()
  twipc401ApplicationJsonObject?: Twipc401ApplicationJson;

  @SpeakeasyMetadata()
  twipc404ApplicationJsonObject?: Twipc404ApplicationJson;

  @SpeakeasyMetadata()
  twipc500ApplicationJsonObject?: Twipc500ApplicationJson;

  @SpeakeasyMetadata()
  twipc502ApplicationJsonObject?: Twipc502ApplicationJson;

  @SpeakeasyMetadata()
  twipc503ApplicationJsonObject?: Twipc503ApplicationJson;

  @SpeakeasyMetadata()
  twipc504ApplicationJsonObject?: Twipc504ApplicationJson;
}
