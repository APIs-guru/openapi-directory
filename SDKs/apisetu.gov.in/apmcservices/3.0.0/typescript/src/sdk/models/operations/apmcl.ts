import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApmclRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentNumber" })
  documentNumber: string;
}

export enum ApmclRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class ApmclRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: ApmclRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: ApmclRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class ApmclSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Apmcl400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Apmcl400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Apmcl400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Apmcl400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Apmcl400ApplicationJsonErrorDescriptionEnum;
}

export enum Apmcl401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Apmcl401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Apmcl401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Apmcl401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Apmcl401ApplicationJsonErrorDescriptionEnum;
}

export enum Apmcl404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Apmcl404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Apmcl404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Apmcl404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Apmcl404ApplicationJsonErrorDescriptionEnum;
}

export enum Apmcl500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Apmcl500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Apmcl500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Apmcl500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Apmcl500ApplicationJsonErrorDescriptionEnum;
}

export enum Apmcl502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Apmcl502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Apmcl502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Apmcl502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Apmcl502ApplicationJsonErrorDescriptionEnum;
}

export enum Apmcl503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Apmcl503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Apmcl503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Apmcl503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Apmcl503ApplicationJsonErrorDescriptionEnum;
}

export enum Apmcl504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Apmcl504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Apmcl504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Apmcl504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Apmcl504ApplicationJsonErrorDescriptionEnum;
}


export class ApmclRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ApmclRequestBody;

  @SpeakeasyMetadata()
  security: ApmclSecurity;
}


export class ApmclResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apmcl400ApplicationJsonObject?: Apmcl400ApplicationJson;

  @SpeakeasyMetadata()
  apmcl401ApplicationJsonObject?: Apmcl401ApplicationJson;

  @SpeakeasyMetadata()
  apmcl404ApplicationJsonObject?: Apmcl404ApplicationJson;

  @SpeakeasyMetadata()
  apmcl500ApplicationJsonObject?: Apmcl500ApplicationJson;

  @SpeakeasyMetadata()
  apmcl502ApplicationJsonObject?: Apmcl502ApplicationJson;

  @SpeakeasyMetadata()
  apmcl503ApplicationJsonObject?: Apmcl503ApplicationJson;

  @SpeakeasyMetadata()
  apmcl504ApplicationJsonObject?: Apmcl504ApplicationJson;
}
