import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LicerRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    udf1: string;
    udf2: string;
}
export declare enum LicerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class LicerRequestBody extends SpeakeasyBase {
    certificateParameters?: LicerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: LicerRequestBodyFormatEnum;
    txnId: string;
}
export declare class LicerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Licer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Licer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Licer400ApplicationJson extends SpeakeasyBase {
    error?: Licer400ApplicationJsonErrorEnum;
    errorDescription?: Licer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Licer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Licer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Licer401ApplicationJson extends SpeakeasyBase {
    error?: Licer401ApplicationJsonErrorEnum;
    errorDescription?: Licer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Licer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Licer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Licer404ApplicationJson extends SpeakeasyBase {
    error?: Licer404ApplicationJsonErrorEnum;
    errorDescription?: Licer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Licer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Licer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Licer500ApplicationJson extends SpeakeasyBase {
    error?: Licer500ApplicationJsonErrorEnum;
    errorDescription?: Licer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Licer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Licer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Licer502ApplicationJson extends SpeakeasyBase {
    error?: Licer502ApplicationJsonErrorEnum;
    errorDescription?: Licer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Licer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Licer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Licer503ApplicationJson extends SpeakeasyBase {
    error?: Licer503ApplicationJsonErrorEnum;
    errorDescription?: Licer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Licer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Licer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Licer504ApplicationJson extends SpeakeasyBase {
    error?: Licer504ApplicationJsonErrorEnum;
    errorDescription?: Licer504ApplicationJsonErrorDescriptionEnum;
}
export declare class LicerRequest extends SpeakeasyBase {
    request?: LicerRequestBody;
    security: LicerSecurity;
}
export declare class LicerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    licer400ApplicationJsonObject?: Licer400ApplicationJson;
    licer401ApplicationJsonObject?: Licer401ApplicationJson;
    licer404ApplicationJsonObject?: Licer404ApplicationJson;
    licer500ApplicationJsonObject?: Licer500ApplicationJson;
    licer502ApplicationJsonObject?: Licer502ApplicationJson;
    licer503ApplicationJsonObject?: Licer503ApplicationJson;
    licer504ApplicationJsonObject?: Licer504ApplicationJson;
}
