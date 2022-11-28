import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VhinscRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=UID" })
  uid: string;

  @SpeakeasyMetadata({ data: "json, name=chasis_no" })
  chasisNo: string;

  @SpeakeasyMetadata({ data: "json, name=reg_no" })
  regNo: string;

  @SpeakeasyMetadata({ data: "json, name=swd_name" })
  swdName: string;
}

export enum VhinscRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class VhinscRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: VhinscRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: VhinscRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class VhinscSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Vhinsc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Vhinsc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Vhinsc400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vhinsc400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhinsc400ApplicationJsonErrorDescriptionEnum;
}

export enum Vhinsc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Vhinsc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Vhinsc401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vhinsc401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhinsc401ApplicationJsonErrorDescriptionEnum;
}

export enum Vhinsc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Vhinsc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Vhinsc404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vhinsc404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhinsc404ApplicationJsonErrorDescriptionEnum;
}

export enum Vhinsc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Vhinsc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Vhinsc500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vhinsc500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhinsc500ApplicationJsonErrorDescriptionEnum;
}

export enum Vhinsc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Vhinsc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Vhinsc502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vhinsc502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhinsc502ApplicationJsonErrorDescriptionEnum;
}

export enum Vhinsc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Vhinsc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Vhinsc503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vhinsc503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhinsc503ApplicationJsonErrorDescriptionEnum;
}

export enum Vhinsc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Vhinsc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Vhinsc504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vhinsc504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhinsc504ApplicationJsonErrorDescriptionEnum;
}


export class VhinscRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: VhinscRequestBody;

  @SpeakeasyMetadata()
  security: VhinscSecurity;
}


export class VhinscResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vhinsc400ApplicationJsonObject?: Vhinsc400ApplicationJson;

  @SpeakeasyMetadata()
  vhinsc401ApplicationJsonObject?: Vhinsc401ApplicationJson;

  @SpeakeasyMetadata()
  vhinsc404ApplicationJsonObject?: Vhinsc404ApplicationJson;

  @SpeakeasyMetadata()
  vhinsc500ApplicationJsonObject?: Vhinsc500ApplicationJson;

  @SpeakeasyMetadata()
  vhinsc502ApplicationJsonObject?: Vhinsc502ApplicationJson;

  @SpeakeasyMetadata()
  vhinsc503ApplicationJsonObject?: Vhinsc503ApplicationJson;

  @SpeakeasyMetadata()
  vhinsc504ApplicationJsonObject?: Vhinsc504ApplicationJson;
}
