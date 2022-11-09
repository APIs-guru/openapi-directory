import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class EwcerRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    dsn: string;
}
export declare enum EwcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class EwcerRequestBody extends SpeakeasyBase {
    certificateParameters?: EwcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: EwcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class EwcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class EwcerRequest extends SpeakeasyBase {
    request?: EwcerRequestBody;
    security: EwcerSecurity;
}
export declare enum Ewcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ewcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Ewcer400ApplicationJson extends SpeakeasyBase {
    error?: Ewcer400ApplicationJsonErrorEnum;
    errorDescription?: Ewcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ewcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ewcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Ewcer401ApplicationJson extends SpeakeasyBase {
    error?: Ewcer401ApplicationJsonErrorEnum;
    errorDescription?: Ewcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ewcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ewcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Ewcer404ApplicationJson extends SpeakeasyBase {
    error?: Ewcer404ApplicationJsonErrorEnum;
    errorDescription?: Ewcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ewcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ewcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Ewcer500ApplicationJson extends SpeakeasyBase {
    error?: Ewcer500ApplicationJsonErrorEnum;
    errorDescription?: Ewcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ewcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ewcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Ewcer502ApplicationJson extends SpeakeasyBase {
    error?: Ewcer502ApplicationJsonErrorEnum;
    errorDescription?: Ewcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ewcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ewcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Ewcer503ApplicationJson extends SpeakeasyBase {
    error?: Ewcer503ApplicationJsonErrorEnum;
    errorDescription?: Ewcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ewcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ewcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Ewcer504ApplicationJson extends SpeakeasyBase {
    error?: Ewcer504ApplicationJsonErrorEnum;
    errorDescription?: Ewcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class EwcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ewcer400ApplicationJsonObject?: Ewcer400ApplicationJson;
    ewcer401ApplicationJsonObject?: Ewcer401ApplicationJson;
    ewcer404ApplicationJsonObject?: Ewcer404ApplicationJson;
    ewcer500ApplicationJsonObject?: Ewcer500ApplicationJson;
    ewcer502ApplicationJsonObject?: Ewcer502ApplicationJson;
    ewcer503ApplicationJsonObject?: Ewcer503ApplicationJson;
    ewcer504ApplicationJsonObject?: Ewcer504ApplicationJson;
}
