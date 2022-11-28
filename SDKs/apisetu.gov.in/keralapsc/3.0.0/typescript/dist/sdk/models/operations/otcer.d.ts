import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OtcerRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    uid: string;
}
export declare enum OtcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class OtcerRequestBody extends SpeakeasyBase {
    certificateParameters?: OtcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: OtcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class OtcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Otcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Otcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Otcer400ApplicationJson extends SpeakeasyBase {
    error?: Otcer400ApplicationJsonErrorEnum;
    errorDescription?: Otcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Otcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Otcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Otcer401ApplicationJson extends SpeakeasyBase {
    error?: Otcer401ApplicationJsonErrorEnum;
    errorDescription?: Otcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Otcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Otcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Otcer404ApplicationJson extends SpeakeasyBase {
    error?: Otcer404ApplicationJsonErrorEnum;
    errorDescription?: Otcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Otcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Otcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Otcer500ApplicationJson extends SpeakeasyBase {
    error?: Otcer500ApplicationJsonErrorEnum;
    errorDescription?: Otcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Otcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Otcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Otcer502ApplicationJson extends SpeakeasyBase {
    error?: Otcer502ApplicationJsonErrorEnum;
    errorDescription?: Otcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Otcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Otcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Otcer503ApplicationJson extends SpeakeasyBase {
    error?: Otcer503ApplicationJsonErrorEnum;
    errorDescription?: Otcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Otcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Otcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Otcer504ApplicationJson extends SpeakeasyBase {
    error?: Otcer504ApplicationJsonErrorEnum;
    errorDescription?: Otcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class OtcerRequest extends SpeakeasyBase {
    request?: OtcerRequestBody;
    security: OtcerSecurity;
}
export declare class OtcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    otcer400ApplicationJsonObject?: Otcer400ApplicationJson;
    otcer401ApplicationJsonObject?: Otcer401ApplicationJson;
    otcer404ApplicationJsonObject?: Otcer404ApplicationJson;
    otcer500ApplicationJsonObject?: Otcer500ApplicationJson;
    otcer502ApplicationJsonObject?: Otcer502ApplicationJson;
    otcer503ApplicationJsonObject?: Otcer503ApplicationJson;
    otcer504ApplicationJsonObject?: Otcer504ApplicationJson;
}
