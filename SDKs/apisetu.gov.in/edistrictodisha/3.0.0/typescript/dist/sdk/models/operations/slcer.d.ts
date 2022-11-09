import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SlcerRequestBodyCertificateParameters extends SpeakeasyBase {
    uid: string;
    refno: string;
}
export declare enum SlcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class SlcerRequestBody extends SpeakeasyBase {
    certificateParameters?: SlcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: SlcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class SlcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class SlcerRequest extends SpeakeasyBase {
    request?: SlcerRequestBody;
    security: SlcerSecurity;
}
export declare enum Slcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Slcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Slcer400ApplicationJson extends SpeakeasyBase {
    error?: Slcer400ApplicationJsonErrorEnum;
    errorDescription?: Slcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Slcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Slcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Slcer401ApplicationJson extends SpeakeasyBase {
    error?: Slcer401ApplicationJsonErrorEnum;
    errorDescription?: Slcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Slcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Slcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Slcer404ApplicationJson extends SpeakeasyBase {
    error?: Slcer404ApplicationJsonErrorEnum;
    errorDescription?: Slcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Slcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Slcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Slcer500ApplicationJson extends SpeakeasyBase {
    error?: Slcer500ApplicationJsonErrorEnum;
    errorDescription?: Slcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Slcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Slcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Slcer502ApplicationJson extends SpeakeasyBase {
    error?: Slcer502ApplicationJsonErrorEnum;
    errorDescription?: Slcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Slcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Slcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Slcer503ApplicationJson extends SpeakeasyBase {
    error?: Slcer503ApplicationJsonErrorEnum;
    errorDescription?: Slcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Slcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Slcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Slcer504ApplicationJson extends SpeakeasyBase {
    error?: Slcer504ApplicationJsonErrorEnum;
    errorDescription?: Slcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class SlcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    slcer400ApplicationJsonObject?: Slcer400ApplicationJson;
    slcer401ApplicationJsonObject?: Slcer401ApplicationJson;
    slcer404ApplicationJsonObject?: Slcer404ApplicationJson;
    slcer500ApplicationJsonObject?: Slcer500ApplicationJson;
    slcer502ApplicationJsonObject?: Slcer502ApplicationJson;
    slcer503ApplicationJsonObject?: Slcer503ApplicationJson;
    slcer504ApplicationJsonObject?: Slcer504ApplicationJson;
}
