import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SsmgrRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=rollno" })
  rollno: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year: string;
}

export enum SsmgrRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class SsmgrRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: SsmgrRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: SsmgrRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class SsmgrSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Ssmgr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Ssmgr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Ssmgr400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ssmgr400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ssmgr400ApplicationJsonErrorDescriptionEnum;
}

export enum Ssmgr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Ssmgr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Ssmgr401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ssmgr401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ssmgr401ApplicationJsonErrorDescriptionEnum;
}

export enum Ssmgr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Ssmgr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Ssmgr404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ssmgr404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ssmgr404ApplicationJsonErrorDescriptionEnum;
}

export enum Ssmgr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Ssmgr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Ssmgr500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ssmgr500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ssmgr500ApplicationJsonErrorDescriptionEnum;
}

export enum Ssmgr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Ssmgr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Ssmgr502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ssmgr502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ssmgr502ApplicationJsonErrorDescriptionEnum;
}

export enum Ssmgr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Ssmgr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Ssmgr503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ssmgr503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ssmgr503ApplicationJsonErrorDescriptionEnum;
}

export enum Ssmgr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Ssmgr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Ssmgr504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ssmgr504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ssmgr504ApplicationJsonErrorDescriptionEnum;
}


export class SsmgrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SsmgrRequestBody;

  @SpeakeasyMetadata()
  security: SsmgrSecurity;
}


export class SsmgrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ssmgr400ApplicationJsonObject?: Ssmgr400ApplicationJson;

  @SpeakeasyMetadata()
  ssmgr401ApplicationJsonObject?: Ssmgr401ApplicationJson;

  @SpeakeasyMetadata()
  ssmgr404ApplicationJsonObject?: Ssmgr404ApplicationJson;

  @SpeakeasyMetadata()
  ssmgr500ApplicationJsonObject?: Ssmgr500ApplicationJson;

  @SpeakeasyMetadata()
  ssmgr502ApplicationJsonObject?: Ssmgr502ApplicationJson;

  @SpeakeasyMetadata()
  ssmgr503ApplicationJsonObject?: Ssmgr503ApplicationJson;

  @SpeakeasyMetadata()
  ssmgr504ApplicationJsonObject?: Ssmgr504ApplicationJson;
}
