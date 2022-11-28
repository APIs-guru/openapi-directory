import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SscerRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    rroll: string;
    uid: string;
    year: string;
}
export declare enum SscerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class SscerRequestBody extends SpeakeasyBase {
    certificateParameters?: SscerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: SscerRequestBodyFormatEnum;
    txnId: string;
}
export declare class SscerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Sscer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Sscer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Sscer400ApplicationJson extends SpeakeasyBase {
    error?: Sscer400ApplicationJsonErrorEnum;
    errorDescription?: Sscer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sscer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Sscer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Sscer401ApplicationJson extends SpeakeasyBase {
    error?: Sscer401ApplicationJsonErrorEnum;
    errorDescription?: Sscer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sscer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Sscer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Sscer404ApplicationJson extends SpeakeasyBase {
    error?: Sscer404ApplicationJsonErrorEnum;
    errorDescription?: Sscer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sscer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Sscer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Sscer500ApplicationJson extends SpeakeasyBase {
    error?: Sscer500ApplicationJsonErrorEnum;
    errorDescription?: Sscer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sscer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Sscer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Sscer502ApplicationJson extends SpeakeasyBase {
    error?: Sscer502ApplicationJsonErrorEnum;
    errorDescription?: Sscer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sscer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Sscer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Sscer503ApplicationJson extends SpeakeasyBase {
    error?: Sscer503ApplicationJsonErrorEnum;
    errorDescription?: Sscer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sscer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Sscer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Sscer504ApplicationJson extends SpeakeasyBase {
    error?: Sscer504ApplicationJsonErrorEnum;
    errorDescription?: Sscer504ApplicationJsonErrorDescriptionEnum;
}
export declare class SscerRequest extends SpeakeasyBase {
    request?: SscerRequestBody;
    security: SscerSecurity;
}
export declare class SscerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sscer400ApplicationJsonObject?: Sscer400ApplicationJson;
    sscer401ApplicationJsonObject?: Sscer401ApplicationJson;
    sscer404ApplicationJsonObject?: Sscer404ApplicationJson;
    sscer500ApplicationJsonObject?: Sscer500ApplicationJson;
    sscer502ApplicationJsonObject?: Sscer502ApplicationJson;
    sscer503ApplicationJsonObject?: Sscer503ApplicationJson;
    sscer504ApplicationJsonObject?: Sscer504ApplicationJson;
}
