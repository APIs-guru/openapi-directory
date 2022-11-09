import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VlcerRequestBodyCertificateParameters extends SpeakeasyBase {
    certificateNumber: string;
}
export declare enum VlcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class VlcerRequestBody extends SpeakeasyBase {
    certificateParameters?: VlcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: VlcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class VlcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class VlcerRequest extends SpeakeasyBase {
    request?: VlcerRequestBody;
    security: VlcerSecurity;
}
export declare enum Vlcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Vlcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Vlcer400ApplicationJson extends SpeakeasyBase {
    error?: Vlcer400ApplicationJsonErrorEnum;
    errorDescription?: Vlcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vlcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Vlcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Vlcer401ApplicationJson extends SpeakeasyBase {
    error?: Vlcer401ApplicationJsonErrorEnum;
    errorDescription?: Vlcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vlcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Vlcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Vlcer404ApplicationJson extends SpeakeasyBase {
    error?: Vlcer404ApplicationJsonErrorEnum;
    errorDescription?: Vlcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vlcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Vlcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Vlcer500ApplicationJson extends SpeakeasyBase {
    error?: Vlcer500ApplicationJsonErrorEnum;
    errorDescription?: Vlcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vlcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Vlcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Vlcer502ApplicationJson extends SpeakeasyBase {
    error?: Vlcer502ApplicationJsonErrorEnum;
    errorDescription?: Vlcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vlcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Vlcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Vlcer503ApplicationJson extends SpeakeasyBase {
    error?: Vlcer503ApplicationJsonErrorEnum;
    errorDescription?: Vlcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vlcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Vlcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Vlcer504ApplicationJson extends SpeakeasyBase {
    error?: Vlcer504ApplicationJsonErrorEnum;
    errorDescription?: Vlcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class VlcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vlcer400ApplicationJsonObject?: Vlcer400ApplicationJson;
    vlcer401ApplicationJsonObject?: Vlcer401ApplicationJson;
    vlcer404ApplicationJsonObject?: Vlcer404ApplicationJson;
    vlcer500ApplicationJsonObject?: Vlcer500ApplicationJson;
    vlcer502ApplicationJsonObject?: Vlcer502ApplicationJson;
    vlcer503ApplicationJsonObject?: Vlcer503ApplicationJson;
    vlcer504ApplicationJsonObject?: Vlcer504ApplicationJson;
}
