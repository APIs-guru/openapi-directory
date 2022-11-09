import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EgipcRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer_Id" })
  customerId: string;

  @Metadata({ data: "json, name=policy_Number" })
  policyNumber: string;

  @Metadata({ data: "json, name=policy_StartDate" })
  policyStartDate: string;
}

export enum EgipcRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class EgipcRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: EgipcRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: EgipcRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class EgipcSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class EgipcRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: EgipcRequestBody;

  @Metadata()
  security: EgipcSecurity;
}

export enum Egipc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Egipc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Egipc400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Egipc400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Egipc400ApplicationJsonErrorDescriptionEnum;
}

export enum Egipc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Egipc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Egipc401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Egipc401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Egipc401ApplicationJsonErrorDescriptionEnum;
}

export enum Egipc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Egipc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Egipc404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Egipc404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Egipc404ApplicationJsonErrorDescriptionEnum;
}

export enum Egipc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Egipc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Egipc500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Egipc500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Egipc500ApplicationJsonErrorDescriptionEnum;
}

export enum Egipc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Egipc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Egipc502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Egipc502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Egipc502ApplicationJsonErrorDescriptionEnum;
}

export enum Egipc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Egipc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Egipc503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Egipc503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Egipc503ApplicationJsonErrorDescriptionEnum;
}

export enum Egipc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Egipc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Egipc504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Egipc504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Egipc504ApplicationJsonErrorDescriptionEnum;
}


export class EgipcResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  egipc400ApplicationJsonObject?: Egipc400ApplicationJson;

  @Metadata()
  egipc401ApplicationJsonObject?: Egipc401ApplicationJson;

  @Metadata()
  egipc404ApplicationJsonObject?: Egipc404ApplicationJson;

  @Metadata()
  egipc500ApplicationJsonObject?: Egipc500ApplicationJson;

  @Metadata()
  egipc502ApplicationJsonObject?: Egipc502ApplicationJson;

  @Metadata()
  egipc503ApplicationJsonObject?: Egipc503ApplicationJson;

  @Metadata()
  egipc504ApplicationJsonObject?: Egipc504ApplicationJson;
}
