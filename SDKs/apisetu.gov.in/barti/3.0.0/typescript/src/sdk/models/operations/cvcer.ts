import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CvcerRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DOB" })
  dob: string;

  @SpeakeasyMetadata({ data: "json, name=VCNo" })
  vcNo: string;
}

export enum CvcerRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class CvcerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: CvcerRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: CvcerRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class CvcerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Cvcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Cvcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Cvcer400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cvcer400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cvcer400ApplicationJsonErrorDescriptionEnum;
}

export enum Cvcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Cvcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Cvcer401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cvcer401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cvcer401ApplicationJsonErrorDescriptionEnum;
}

export enum Cvcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Cvcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Cvcer404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cvcer404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cvcer404ApplicationJsonErrorDescriptionEnum;
}

export enum Cvcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Cvcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Cvcer500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cvcer500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cvcer500ApplicationJsonErrorDescriptionEnum;
}

export enum Cvcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Cvcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Cvcer502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cvcer502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cvcer502ApplicationJsonErrorDescriptionEnum;
}

export enum Cvcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Cvcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Cvcer503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cvcer503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cvcer503ApplicationJsonErrorDescriptionEnum;
}

export enum Cvcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Cvcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Cvcer504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cvcer504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cvcer504ApplicationJsonErrorDescriptionEnum;
}


export class CvcerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CvcerRequestBody;

  @SpeakeasyMetadata()
  security: CvcerSecurity;
}


export class CvcerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cvcer400ApplicationJsonObject?: Cvcer400ApplicationJson;

  @SpeakeasyMetadata()
  cvcer401ApplicationJsonObject?: Cvcer401ApplicationJson;

  @SpeakeasyMetadata()
  cvcer404ApplicationJsonObject?: Cvcer404ApplicationJson;

  @SpeakeasyMetadata()
  cvcer500ApplicationJsonObject?: Cvcer500ApplicationJson;

  @SpeakeasyMetadata()
  cvcer502ApplicationJsonObject?: Cvcer502ApplicationJson;

  @SpeakeasyMetadata()
  cvcer503ApplicationJsonObject?: Cvcer503ApplicationJson;

  @SpeakeasyMetadata()
  cvcer504ApplicationJsonObject?: Cvcer504ApplicationJson;
}
