import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SmcerRequestBodyCertificateParameters extends SpeakeasyBase {
    refNo: string;
    tokenNo: string;
}
export declare enum SmcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class SmcerRequestBody extends SpeakeasyBase {
    certificateParameters?: SmcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: SmcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class SmcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Smcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Smcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Smcer400ApplicationJson extends SpeakeasyBase {
    error?: Smcer400ApplicationJsonErrorEnum;
    errorDescription?: Smcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Smcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Smcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Smcer401ApplicationJson extends SpeakeasyBase {
    error?: Smcer401ApplicationJsonErrorEnum;
    errorDescription?: Smcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Smcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Smcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Smcer404ApplicationJson extends SpeakeasyBase {
    error?: Smcer404ApplicationJsonErrorEnum;
    errorDescription?: Smcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Smcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Smcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Smcer500ApplicationJson extends SpeakeasyBase {
    error?: Smcer500ApplicationJsonErrorEnum;
    errorDescription?: Smcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Smcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Smcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Smcer502ApplicationJson extends SpeakeasyBase {
    error?: Smcer502ApplicationJsonErrorEnum;
    errorDescription?: Smcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Smcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Smcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Smcer503ApplicationJson extends SpeakeasyBase {
    error?: Smcer503ApplicationJsonErrorEnum;
    errorDescription?: Smcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Smcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Smcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Smcer504ApplicationJson extends SpeakeasyBase {
    error?: Smcer504ApplicationJsonErrorEnum;
    errorDescription?: Smcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class SmcerRequest extends SpeakeasyBase {
    request?: SmcerRequestBody;
    security: SmcerSecurity;
}
export declare class SmcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    smcer400ApplicationJsonObject?: Smcer400ApplicationJson;
    smcer401ApplicationJsonObject?: Smcer401ApplicationJson;
    smcer404ApplicationJsonObject?: Smcer404ApplicationJson;
    smcer500ApplicationJsonObject?: Smcer500ApplicationJson;
    smcer502ApplicationJsonObject?: Smcer502ApplicationJson;
    smcer503ApplicationJsonObject?: Smcer503ApplicationJson;
    smcer504ApplicationJsonObject?: Smcer504ApplicationJson;
}
