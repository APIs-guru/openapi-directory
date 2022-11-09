import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CvipcRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=DOB" })
  dob: string;

  @Metadata({ data: "json, name=FullName" })
  fullName: string;

  @Metadata({ data: "json, name=GENDER" })
  gender: string;

  @Metadata({ data: "json, name=PolicyNo" })
  policyNo: string;

  @Metadata({ data: "json, name=PolicyType" })
  policyType: string;
}

export enum CvipcRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class CvipcRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: CvipcRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: CvipcRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class CvipcSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class CvipcRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CvipcRequestBody;

  @Metadata()
  security: CvipcSecurity;
}

export enum Cvipc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Cvipc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Cvipc400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cvipc400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cvipc400ApplicationJsonErrorDescriptionEnum;
}

export enum Cvipc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Cvipc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Cvipc401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cvipc401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cvipc401ApplicationJsonErrorDescriptionEnum;
}

export enum Cvipc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Cvipc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Cvipc404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cvipc404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cvipc404ApplicationJsonErrorDescriptionEnum;
}

export enum Cvipc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Cvipc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Cvipc500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cvipc500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cvipc500ApplicationJsonErrorDescriptionEnum;
}

export enum Cvipc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Cvipc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Cvipc502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cvipc502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cvipc502ApplicationJsonErrorDescriptionEnum;
}

export enum Cvipc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Cvipc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Cvipc503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cvipc503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cvipc503ApplicationJsonErrorDescriptionEnum;
}

export enum Cvipc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Cvipc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Cvipc504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cvipc504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cvipc504ApplicationJsonErrorDescriptionEnum;
}


export class CvipcResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  cvipc400ApplicationJsonObject?: Cvipc400ApplicationJson;

  @Metadata()
  cvipc401ApplicationJsonObject?: Cvipc401ApplicationJson;

  @Metadata()
  cvipc404ApplicationJsonObject?: Cvipc404ApplicationJson;

  @Metadata()
  cvipc500ApplicationJsonObject?: Cvipc500ApplicationJson;

  @Metadata()
  cvipc502ApplicationJsonObject?: Cvipc502ApplicationJson;

  @Metadata()
  cvipc503ApplicationJsonObject?: Cvipc503ApplicationJson;

  @Metadata()
  cvipc504ApplicationJsonObject?: Cvipc504ApplicationJson;
}
