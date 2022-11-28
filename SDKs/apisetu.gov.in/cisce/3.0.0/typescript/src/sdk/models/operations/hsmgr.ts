import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class HsmgrRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CUID" })
  cuid: string;

  @SpeakeasyMetadata({ data: "json, name=DOB" })
  dob: string;

  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=IDXN" })
  idxn: string;

  @SpeakeasyMetadata({ data: "json, name=UID" })
  uid: string;

  @SpeakeasyMetadata({ data: "json, name=YOE" })
  yoe: string;
}

export enum HsmgrRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class HsmgrRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: HsmgrRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: HsmgrRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class HsmgrSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Hsmgr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Hsmgr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Hsmgr400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Hsmgr400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Hsmgr400ApplicationJsonErrorDescriptionEnum;
}

export enum Hsmgr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Hsmgr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Hsmgr401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Hsmgr401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Hsmgr401ApplicationJsonErrorDescriptionEnum;
}

export enum Hsmgr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Hsmgr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Hsmgr404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Hsmgr404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Hsmgr404ApplicationJsonErrorDescriptionEnum;
}

export enum Hsmgr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Hsmgr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Hsmgr500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Hsmgr500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Hsmgr500ApplicationJsonErrorDescriptionEnum;
}

export enum Hsmgr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Hsmgr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Hsmgr502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Hsmgr502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Hsmgr502ApplicationJsonErrorDescriptionEnum;
}

export enum Hsmgr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Hsmgr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Hsmgr503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Hsmgr503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Hsmgr503ApplicationJsonErrorDescriptionEnum;
}

export enum Hsmgr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Hsmgr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Hsmgr504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Hsmgr504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Hsmgr504ApplicationJsonErrorDescriptionEnum;
}


export class HsmgrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: HsmgrRequestBody;

  @SpeakeasyMetadata()
  security: HsmgrSecurity;
}


export class HsmgrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  hsmgr400ApplicationJsonObject?: Hsmgr400ApplicationJson;

  @SpeakeasyMetadata()
  hsmgr401ApplicationJsonObject?: Hsmgr401ApplicationJson;

  @SpeakeasyMetadata()
  hsmgr404ApplicationJsonObject?: Hsmgr404ApplicationJson;

  @SpeakeasyMetadata()
  hsmgr500ApplicationJsonObject?: Hsmgr500ApplicationJson;

  @SpeakeasyMetadata()
  hsmgr502ApplicationJsonObject?: Hsmgr502ApplicationJson;

  @SpeakeasyMetadata()
  hsmgr503ApplicationJsonObject?: Hsmgr503ApplicationJson;

  @SpeakeasyMetadata()
  hsmgr504ApplicationJsonObject?: Hsmgr504ApplicationJson;
}
