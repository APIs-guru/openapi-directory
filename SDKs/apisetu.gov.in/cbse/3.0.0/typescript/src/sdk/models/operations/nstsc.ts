import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NstscRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=rollno" })
  rollno: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year: string;
}

export enum NstscRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class NstscRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: NstscRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: NstscRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class NstscSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Nstsc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Nstsc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Nstsc400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nstsc400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nstsc400ApplicationJsonErrorDescriptionEnum;
}

export enum Nstsc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Nstsc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Nstsc401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nstsc401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nstsc401ApplicationJsonErrorDescriptionEnum;
}

export enum Nstsc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Nstsc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Nstsc404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nstsc404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nstsc404ApplicationJsonErrorDescriptionEnum;
}

export enum Nstsc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Nstsc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Nstsc500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nstsc500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nstsc500ApplicationJsonErrorDescriptionEnum;
}

export enum Nstsc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Nstsc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Nstsc502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nstsc502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nstsc502ApplicationJsonErrorDescriptionEnum;
}

export enum Nstsc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Nstsc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Nstsc503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nstsc503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nstsc503ApplicationJsonErrorDescriptionEnum;
}

export enum Nstsc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Nstsc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Nstsc504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Nstsc504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Nstsc504ApplicationJsonErrorDescriptionEnum;
}


export class NstscRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: NstscRequestBody;

  @SpeakeasyMetadata()
  security: NstscSecurity;
}


export class NstscResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  nstsc400ApplicationJsonObject?: Nstsc400ApplicationJson;

  @SpeakeasyMetadata()
  nstsc401ApplicationJsonObject?: Nstsc401ApplicationJson;

  @SpeakeasyMetadata()
  nstsc404ApplicationJsonObject?: Nstsc404ApplicationJson;

  @SpeakeasyMetadata()
  nstsc500ApplicationJsonObject?: Nstsc500ApplicationJson;

  @SpeakeasyMetadata()
  nstsc502ApplicationJsonObject?: Nstsc502ApplicationJson;

  @SpeakeasyMetadata()
  nstsc503ApplicationJsonObject?: Nstsc503ApplicationJson;

  @SpeakeasyMetadata()
  nstsc504ApplicationJsonObject?: Nstsc504ApplicationJson;
}
