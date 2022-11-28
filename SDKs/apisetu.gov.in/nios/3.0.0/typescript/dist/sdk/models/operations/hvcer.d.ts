import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HvcerRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    rroll: string;
    year: string;
}
export declare enum HvcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class HvcerRequestBody extends SpeakeasyBase {
    certificateParameters?: HvcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: HvcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class HvcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Hvcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Hvcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Hvcer400ApplicationJson extends SpeakeasyBase {
    error?: Hvcer400ApplicationJsonErrorEnum;
    errorDescription?: Hvcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hvcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Hvcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Hvcer401ApplicationJson extends SpeakeasyBase {
    error?: Hvcer401ApplicationJsonErrorEnum;
    errorDescription?: Hvcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hvcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Hvcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Hvcer404ApplicationJson extends SpeakeasyBase {
    error?: Hvcer404ApplicationJsonErrorEnum;
    errorDescription?: Hvcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hvcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Hvcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Hvcer500ApplicationJson extends SpeakeasyBase {
    error?: Hvcer500ApplicationJsonErrorEnum;
    errorDescription?: Hvcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hvcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Hvcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Hvcer502ApplicationJson extends SpeakeasyBase {
    error?: Hvcer502ApplicationJsonErrorEnum;
    errorDescription?: Hvcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hvcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Hvcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Hvcer503ApplicationJson extends SpeakeasyBase {
    error?: Hvcer503ApplicationJsonErrorEnum;
    errorDescription?: Hvcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hvcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Hvcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Hvcer504ApplicationJson extends SpeakeasyBase {
    error?: Hvcer504ApplicationJsonErrorEnum;
    errorDescription?: Hvcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class HvcerRequest extends SpeakeasyBase {
    request?: HvcerRequestBody;
    security: HvcerSecurity;
}
export declare class HvcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    hvcer400ApplicationJsonObject?: Hvcer400ApplicationJson;
    hvcer401ApplicationJsonObject?: Hvcer401ApplicationJson;
    hvcer404ApplicationJsonObject?: Hvcer404ApplicationJson;
    hvcer500ApplicationJsonObject?: Hvcer500ApplicationJson;
    hvcer502ApplicationJsonObject?: Hvcer502ApplicationJson;
    hvcer503ApplicationJsonObject?: Hvcer503ApplicationJson;
    hvcer504ApplicationJsonObject?: Hvcer504ApplicationJson;
}
