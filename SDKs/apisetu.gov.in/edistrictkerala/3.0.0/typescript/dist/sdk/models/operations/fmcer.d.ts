import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FmcerRequestBodyCertificateParameters extends SpeakeasyBase {
    aplno: string;
    certno: string;
    sccd: string;
}
export declare enum FmcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class FmcerRequestBody extends SpeakeasyBase {
    certificateParameters?: FmcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: FmcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class FmcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Fmcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Fmcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Fmcer400ApplicationJson extends SpeakeasyBase {
    error?: Fmcer400ApplicationJsonErrorEnum;
    errorDescription?: Fmcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Fmcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Fmcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Fmcer401ApplicationJson extends SpeakeasyBase {
    error?: Fmcer401ApplicationJsonErrorEnum;
    errorDescription?: Fmcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Fmcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Fmcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Fmcer404ApplicationJson extends SpeakeasyBase {
    error?: Fmcer404ApplicationJsonErrorEnum;
    errorDescription?: Fmcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Fmcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Fmcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Fmcer500ApplicationJson extends SpeakeasyBase {
    error?: Fmcer500ApplicationJsonErrorEnum;
    errorDescription?: Fmcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Fmcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Fmcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Fmcer502ApplicationJson extends SpeakeasyBase {
    error?: Fmcer502ApplicationJsonErrorEnum;
    errorDescription?: Fmcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Fmcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Fmcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Fmcer503ApplicationJson extends SpeakeasyBase {
    error?: Fmcer503ApplicationJsonErrorEnum;
    errorDescription?: Fmcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Fmcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Fmcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Fmcer504ApplicationJson extends SpeakeasyBase {
    error?: Fmcer504ApplicationJsonErrorEnum;
    errorDescription?: Fmcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class FmcerRequest extends SpeakeasyBase {
    request?: FmcerRequestBody;
    security: FmcerSecurity;
}
export declare class FmcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    fmcer400ApplicationJsonObject?: Fmcer400ApplicationJson;
    fmcer401ApplicationJsonObject?: Fmcer401ApplicationJson;
    fmcer404ApplicationJsonObject?: Fmcer404ApplicationJson;
    fmcer500ApplicationJsonObject?: Fmcer500ApplicationJson;
    fmcer502ApplicationJsonObject?: Fmcer502ApplicationJson;
    fmcer503ApplicationJsonObject?: Fmcer503ApplicationJson;
    fmcer504ApplicationJsonObject?: Fmcer504ApplicationJson;
}
