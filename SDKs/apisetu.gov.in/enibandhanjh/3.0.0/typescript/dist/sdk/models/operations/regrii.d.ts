import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RegriiRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    regno: string;
    sroId: string;
    yr: string;
}
export declare enum RegriiRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class RegriiRequestBody extends SpeakeasyBase {
    certificateParameters?: RegriiRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: RegriiRequestBodyFormatEnum;
    txnId: string;
}
export declare class RegriiSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Regrii400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Regrii400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Regrii400ApplicationJson extends SpeakeasyBase {
    error?: Regrii400ApplicationJsonErrorEnum;
    errorDescription?: Regrii400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Regrii401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Regrii401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Regrii401ApplicationJson extends SpeakeasyBase {
    error?: Regrii401ApplicationJsonErrorEnum;
    errorDescription?: Regrii401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Regrii404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Regrii404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Regrii404ApplicationJson extends SpeakeasyBase {
    error?: Regrii404ApplicationJsonErrorEnum;
    errorDescription?: Regrii404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Regrii500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Regrii500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Regrii500ApplicationJson extends SpeakeasyBase {
    error?: Regrii500ApplicationJsonErrorEnum;
    errorDescription?: Regrii500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Regrii502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Regrii502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Regrii502ApplicationJson extends SpeakeasyBase {
    error?: Regrii502ApplicationJsonErrorEnum;
    errorDescription?: Regrii502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Regrii503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Regrii503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Regrii503ApplicationJson extends SpeakeasyBase {
    error?: Regrii503ApplicationJsonErrorEnum;
    errorDescription?: Regrii503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Regrii504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Regrii504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Regrii504ApplicationJson extends SpeakeasyBase {
    error?: Regrii504ApplicationJsonErrorEnum;
    errorDescription?: Regrii504ApplicationJsonErrorDescriptionEnum;
}
export declare class RegriiRequest extends SpeakeasyBase {
    request?: RegriiRequestBody;
    security: RegriiSecurity;
}
export declare class RegriiResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    regrii400ApplicationJsonObject?: Regrii400ApplicationJson;
    regrii401ApplicationJsonObject?: Regrii401ApplicationJson;
    regrii404ApplicationJsonObject?: Regrii404ApplicationJson;
    regrii500ApplicationJsonObject?: Regrii500ApplicationJson;
    regrii502ApplicationJsonObject?: Regrii502ApplicationJson;
    regrii503ApplicationJsonObject?: Regrii503ApplicationJson;
    regrii504ApplicationJsonObject?: Regrii504ApplicationJson;
}
