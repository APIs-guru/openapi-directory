import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabrpRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    gender: string;
    mobileNoRq: string;
}
export declare enum LabrpRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class LabrpRequestBody extends SpeakeasyBase {
    certificateParameters?: LabrpRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: LabrpRequestBodyFormatEnum;
    txnId: string;
}
export declare class LabrpSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Labrp400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Labrp400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Labrp400ApplicationJson extends SpeakeasyBase {
    error?: Labrp400ApplicationJsonErrorEnum;
    errorDescription?: Labrp400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Labrp401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Labrp401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Labrp401ApplicationJson extends SpeakeasyBase {
    error?: Labrp401ApplicationJsonErrorEnum;
    errorDescription?: Labrp401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Labrp404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Labrp404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Labrp404ApplicationJson extends SpeakeasyBase {
    error?: Labrp404ApplicationJsonErrorEnum;
    errorDescription?: Labrp404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Labrp500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Labrp500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Labrp500ApplicationJson extends SpeakeasyBase {
    error?: Labrp500ApplicationJsonErrorEnum;
    errorDescription?: Labrp500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Labrp502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Labrp502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Labrp502ApplicationJson extends SpeakeasyBase {
    error?: Labrp502ApplicationJsonErrorEnum;
    errorDescription?: Labrp502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Labrp503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Labrp503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Labrp503ApplicationJson extends SpeakeasyBase {
    error?: Labrp503ApplicationJsonErrorEnum;
    errorDescription?: Labrp503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Labrp504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Labrp504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Labrp504ApplicationJson extends SpeakeasyBase {
    error?: Labrp504ApplicationJsonErrorEnum;
    errorDescription?: Labrp504ApplicationJsonErrorDescriptionEnum;
}
export declare class LabrpRequest extends SpeakeasyBase {
    request?: LabrpRequestBody;
    security: LabrpSecurity;
}
export declare class LabrpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    labrp400ApplicationJsonObject?: Labrp400ApplicationJson;
    labrp401ApplicationJsonObject?: Labrp401ApplicationJson;
    labrp404ApplicationJsonObject?: Labrp404ApplicationJson;
    labrp500ApplicationJsonObject?: Labrp500ApplicationJson;
    labrp502ApplicationJsonObject?: Labrp502ApplicationJson;
    labrp503ApplicationJsonObject?: Labrp503ApplicationJson;
    labrp504ApplicationJsonObject?: Labrp504ApplicationJson;
}
