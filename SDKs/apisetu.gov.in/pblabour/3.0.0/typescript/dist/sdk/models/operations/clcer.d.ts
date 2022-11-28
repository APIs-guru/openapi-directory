import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClcerRequestBodyCertificateParameters extends SpeakeasyBase {
    uid: string;
    lino: string;
}
export declare enum ClcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class ClcerRequestBody extends SpeakeasyBase {
    certificateParameters?: ClcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: ClcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class ClcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Clcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Clcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Clcer400ApplicationJson extends SpeakeasyBase {
    error?: Clcer400ApplicationJsonErrorEnum;
    errorDescription?: Clcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Clcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Clcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Clcer401ApplicationJson extends SpeakeasyBase {
    error?: Clcer401ApplicationJsonErrorEnum;
    errorDescription?: Clcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Clcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Clcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Clcer404ApplicationJson extends SpeakeasyBase {
    error?: Clcer404ApplicationJsonErrorEnum;
    errorDescription?: Clcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Clcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Clcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Clcer500ApplicationJson extends SpeakeasyBase {
    error?: Clcer500ApplicationJsonErrorEnum;
    errorDescription?: Clcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Clcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Clcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Clcer502ApplicationJson extends SpeakeasyBase {
    error?: Clcer502ApplicationJsonErrorEnum;
    errorDescription?: Clcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Clcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Clcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Clcer503ApplicationJson extends SpeakeasyBase {
    error?: Clcer503ApplicationJsonErrorEnum;
    errorDescription?: Clcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Clcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Clcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Clcer504ApplicationJson extends SpeakeasyBase {
    error?: Clcer504ApplicationJsonErrorEnum;
    errorDescription?: Clcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class ClcerRequest extends SpeakeasyBase {
    request?: ClcerRequestBody;
    security: ClcerSecurity;
}
export declare class ClcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    clcer400ApplicationJsonObject?: Clcer400ApplicationJson;
    clcer401ApplicationJsonObject?: Clcer401ApplicationJson;
    clcer404ApplicationJsonObject?: Clcer404ApplicationJson;
    clcer500ApplicationJsonObject?: Clcer500ApplicationJson;
    clcer502ApplicationJsonObject?: Clcer502ApplicationJson;
    clcer503ApplicationJsonObject?: Clcer503ApplicationJson;
    clcer504ApplicationJsonObject?: Clcer504ApplicationJson;
}
