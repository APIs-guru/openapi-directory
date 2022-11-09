import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RvcerRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=FullName" })
  fullName: string;

  @Metadata({ data: "json, name=UID" })
  uid: string;

  @Metadata({ data: "json, name=chasis_no" })
  chasisNo: string;

  @Metadata({ data: "json, name=reg_no" })
  regNo: string;
}

export enum RvcerRequestBodyFormatEnum {
    Xml = "xml"
,    Pdf = "pdf"
}


export class RvcerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: RvcerRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: RvcerRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class RvcerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class RvcerRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: RvcerRequestBody;

  @Metadata()
  security: RvcerSecurity;
}

export enum Rvcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Rvcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Rvcer400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Rvcer400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Rvcer400ApplicationJsonErrorDescriptionEnum;
}

export enum Rvcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Rvcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Rvcer401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Rvcer401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Rvcer401ApplicationJsonErrorDescriptionEnum;
}

export enum Rvcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Rvcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Rvcer404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Rvcer404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Rvcer404ApplicationJsonErrorDescriptionEnum;
}

export enum Rvcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Rvcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Rvcer500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Rvcer500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Rvcer500ApplicationJsonErrorDescriptionEnum;
}

export enum Rvcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Rvcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Rvcer502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Rvcer502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Rvcer502ApplicationJsonErrorDescriptionEnum;
}

export enum Rvcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Rvcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Rvcer503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Rvcer503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Rvcer503ApplicationJsonErrorDescriptionEnum;
}

export enum Rvcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Rvcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Rvcer504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Rvcer504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Rvcer504ApplicationJsonErrorDescriptionEnum;
}


export class RvcerResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  rvcer400ApplicationJsonObject?: Rvcer400ApplicationJson;

  @Metadata()
  rvcer401ApplicationJsonObject?: Rvcer401ApplicationJson;

  @Metadata()
  rvcer404ApplicationJsonObject?: Rvcer404ApplicationJson;

  @Metadata()
  rvcer500ApplicationJsonObject?: Rvcer500ApplicationJson;

  @Metadata()
  rvcer502ApplicationJsonObject?: Rvcer502ApplicationJson;

  @Metadata()
  rvcer503ApplicationJsonObject?: Rvcer503ApplicationJson;

  @Metadata()
  rvcer504ApplicationJsonObject?: Rvcer504ApplicationJson;
}
