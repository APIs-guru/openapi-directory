import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CyipcRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=policy_number" })
  policyNumber: string;
}

export enum CyipcRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class CyipcRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: CyipcRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: CyipcRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class CyipcSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Cyipc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Cyipc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Cyipc400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cyipc400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cyipc400ApplicationJsonErrorDescriptionEnum;
}

export enum Cyipc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Cyipc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Cyipc401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cyipc401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cyipc401ApplicationJsonErrorDescriptionEnum;
}

export enum Cyipc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Cyipc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Cyipc404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cyipc404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cyipc404ApplicationJsonErrorDescriptionEnum;
}

export enum Cyipc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Cyipc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Cyipc500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cyipc500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cyipc500ApplicationJsonErrorDescriptionEnum;
}

export enum Cyipc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Cyipc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Cyipc502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cyipc502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cyipc502ApplicationJsonErrorDescriptionEnum;
}

export enum Cyipc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Cyipc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Cyipc503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cyipc503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cyipc503ApplicationJsonErrorDescriptionEnum;
}

export enum Cyipc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Cyipc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Cyipc504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Cyipc504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Cyipc504ApplicationJsonErrorDescriptionEnum;
}


export class CyipcRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CyipcRequestBody;

  @SpeakeasyMetadata()
  security: CyipcSecurity;
}


export class CyipcResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cyipc400ApplicationJsonObject?: Cyipc400ApplicationJson;

  @SpeakeasyMetadata()
  cyipc401ApplicationJsonObject?: Cyipc401ApplicationJson;

  @SpeakeasyMetadata()
  cyipc404ApplicationJsonObject?: Cyipc404ApplicationJson;

  @SpeakeasyMetadata()
  cyipc500ApplicationJsonObject?: Cyipc500ApplicationJson;

  @SpeakeasyMetadata()
  cyipc502ApplicationJsonObject?: Cyipc502ApplicationJson;

  @SpeakeasyMetadata()
  cyipc503ApplicationJsonObject?: Cyipc503ApplicationJson;

  @SpeakeasyMetadata()
  cyipc504ApplicationJsonObject?: Cyipc504ApplicationJson;
}
