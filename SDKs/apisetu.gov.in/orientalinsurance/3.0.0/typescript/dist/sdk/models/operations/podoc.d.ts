import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PodocRequestBodyCertificateParameters extends SpeakeasyBase {
    inscode: string;
    polno: string;
    startdt: string;
}
export declare enum PodocRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class PodocRequestBody extends SpeakeasyBase {
    certificateParameters?: PodocRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: PodocRequestBodyFormatEnum;
    txnId: string;
}
export declare class PodocSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Podoc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Podoc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Podoc400ApplicationJson extends SpeakeasyBase {
    error?: Podoc400ApplicationJsonErrorEnum;
    errorDescription?: Podoc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Podoc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Podoc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Podoc401ApplicationJson extends SpeakeasyBase {
    error?: Podoc401ApplicationJsonErrorEnum;
    errorDescription?: Podoc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Podoc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Podoc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Podoc404ApplicationJson extends SpeakeasyBase {
    error?: Podoc404ApplicationJsonErrorEnum;
    errorDescription?: Podoc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Podoc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Podoc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Podoc500ApplicationJson extends SpeakeasyBase {
    error?: Podoc500ApplicationJsonErrorEnum;
    errorDescription?: Podoc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Podoc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Podoc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Podoc502ApplicationJson extends SpeakeasyBase {
    error?: Podoc502ApplicationJsonErrorEnum;
    errorDescription?: Podoc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Podoc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Podoc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Podoc503ApplicationJson extends SpeakeasyBase {
    error?: Podoc503ApplicationJsonErrorEnum;
    errorDescription?: Podoc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Podoc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Podoc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Podoc504ApplicationJson extends SpeakeasyBase {
    error?: Podoc504ApplicationJsonErrorEnum;
    errorDescription?: Podoc504ApplicationJsonErrorDescriptionEnum;
}
export declare class PodocRequest extends SpeakeasyBase {
    request?: PodocRequestBody;
    security: PodocSecurity;
}
export declare class PodocResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    podoc400ApplicationJsonObject?: Podoc400ApplicationJson;
    podoc401ApplicationJsonObject?: Podoc401ApplicationJson;
    podoc404ApplicationJsonObject?: Podoc404ApplicationJson;
    podoc500ApplicationJsonObject?: Podoc500ApplicationJson;
    podoc502ApplicationJsonObject?: Podoc502ApplicationJson;
    podoc503ApplicationJsonObject?: Podoc503ApplicationJson;
    podoc504ApplicationJsonObject?: Podoc504ApplicationJson;
}
