import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ChcerRequestBodyCertificateParameters extends SpeakeasyBase {
    name: string;
    refNo: string;
}
export declare enum ChcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class ChcerRequestBody extends SpeakeasyBase {
    certificateParameters?: ChcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: ChcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class ChcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class ChcerRequest extends SpeakeasyBase {
    request?: ChcerRequestBody;
    security: ChcerSecurity;
}
export declare enum Chcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Chcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Chcer400ApplicationJson extends SpeakeasyBase {
    error?: Chcer400ApplicationJsonErrorEnum;
    errorDescription?: Chcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Chcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Chcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Chcer401ApplicationJson extends SpeakeasyBase {
    error?: Chcer401ApplicationJsonErrorEnum;
    errorDescription?: Chcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Chcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Chcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Chcer404ApplicationJson extends SpeakeasyBase {
    error?: Chcer404ApplicationJsonErrorEnum;
    errorDescription?: Chcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Chcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Chcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Chcer500ApplicationJson extends SpeakeasyBase {
    error?: Chcer500ApplicationJsonErrorEnum;
    errorDescription?: Chcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Chcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Chcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Chcer502ApplicationJson extends SpeakeasyBase {
    error?: Chcer502ApplicationJsonErrorEnum;
    errorDescription?: Chcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Chcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Chcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Chcer503ApplicationJson extends SpeakeasyBase {
    error?: Chcer503ApplicationJsonErrorEnum;
    errorDescription?: Chcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Chcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Chcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Chcer504ApplicationJson extends SpeakeasyBase {
    error?: Chcer504ApplicationJsonErrorEnum;
    errorDescription?: Chcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class ChcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    chcer400ApplicationJsonObject?: Chcer400ApplicationJson;
    chcer401ApplicationJsonObject?: Chcer401ApplicationJson;
    chcer404ApplicationJsonObject?: Chcer404ApplicationJson;
    chcer500ApplicationJsonObject?: Chcer500ApplicationJson;
    chcer502ApplicationJsonObject?: Chcer502ApplicationJson;
    chcer503ApplicationJsonObject?: Chcer503ApplicationJson;
    chcer504ApplicationJsonObject?: Chcer504ApplicationJson;
}
