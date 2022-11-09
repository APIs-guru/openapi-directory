import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SrcerRequestBodyCertificateParameters extends SpeakeasyBase {
    refNo: string;
    tokenNo: string;
}
export declare enum SrcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class SrcerRequestBody extends SpeakeasyBase {
    certificateParameters?: SrcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: SrcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class SrcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class SrcerRequest extends SpeakeasyBase {
    request?: SrcerRequestBody;
    security: SrcerSecurity;
}
export declare enum Srcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Srcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Srcer400ApplicationJson extends SpeakeasyBase {
    error?: Srcer400ApplicationJsonErrorEnum;
    errorDescription?: Srcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Srcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Srcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Srcer401ApplicationJson extends SpeakeasyBase {
    error?: Srcer401ApplicationJsonErrorEnum;
    errorDescription?: Srcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Srcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Srcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Srcer404ApplicationJson extends SpeakeasyBase {
    error?: Srcer404ApplicationJsonErrorEnum;
    errorDescription?: Srcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Srcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Srcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Srcer500ApplicationJson extends SpeakeasyBase {
    error?: Srcer500ApplicationJsonErrorEnum;
    errorDescription?: Srcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Srcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Srcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Srcer502ApplicationJson extends SpeakeasyBase {
    error?: Srcer502ApplicationJsonErrorEnum;
    errorDescription?: Srcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Srcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Srcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Srcer503ApplicationJson extends SpeakeasyBase {
    error?: Srcer503ApplicationJsonErrorEnum;
    errorDescription?: Srcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Srcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Srcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Srcer504ApplicationJson extends SpeakeasyBase {
    error?: Srcer504ApplicationJsonErrorEnum;
    errorDescription?: Srcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class SrcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    srcer400ApplicationJsonObject?: Srcer400ApplicationJson;
    srcer401ApplicationJsonObject?: Srcer401ApplicationJson;
    srcer404ApplicationJsonObject?: Srcer404ApplicationJson;
    srcer500ApplicationJsonObject?: Srcer500ApplicationJson;
    srcer502ApplicationJsonObject?: Srcer502ApplicationJson;
    srcer503ApplicationJsonObject?: Srcer503ApplicationJson;
    srcer504ApplicationJsonObject?: Srcer504ApplicationJson;
}
