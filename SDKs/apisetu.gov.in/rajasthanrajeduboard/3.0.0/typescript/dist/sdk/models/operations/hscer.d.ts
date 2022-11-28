import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HscerRequestBodyCertificateParameters extends SpeakeasyBase {
    cname: string;
    roll: string;
    year: string;
}
export declare enum HscerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class HscerRequestBody extends SpeakeasyBase {
    certificateParameters?: HscerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: HscerRequestBodyFormatEnum;
    txnId: string;
}
export declare class HscerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Hscer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Hscer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Hscer400ApplicationJson extends SpeakeasyBase {
    error?: Hscer400ApplicationJsonErrorEnum;
    errorDescription?: Hscer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hscer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Hscer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Hscer401ApplicationJson extends SpeakeasyBase {
    error?: Hscer401ApplicationJsonErrorEnum;
    errorDescription?: Hscer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hscer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Hscer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Hscer404ApplicationJson extends SpeakeasyBase {
    error?: Hscer404ApplicationJsonErrorEnum;
    errorDescription?: Hscer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hscer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Hscer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Hscer500ApplicationJson extends SpeakeasyBase {
    error?: Hscer500ApplicationJsonErrorEnum;
    errorDescription?: Hscer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hscer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Hscer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Hscer502ApplicationJson extends SpeakeasyBase {
    error?: Hscer502ApplicationJsonErrorEnum;
    errorDescription?: Hscer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hscer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Hscer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Hscer503ApplicationJson extends SpeakeasyBase {
    error?: Hscer503ApplicationJsonErrorEnum;
    errorDescription?: Hscer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hscer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Hscer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Hscer504ApplicationJson extends SpeakeasyBase {
    error?: Hscer504ApplicationJsonErrorEnum;
    errorDescription?: Hscer504ApplicationJsonErrorDescriptionEnum;
}
export declare class HscerRequest extends SpeakeasyBase {
    request?: HscerRequestBody;
    security: HscerSecurity;
}
export declare class HscerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    hscer400ApplicationJsonObject?: Hscer400ApplicationJson;
    hscer401ApplicationJsonObject?: Hscer401ApplicationJson;
    hscer404ApplicationJsonObject?: Hscer404ApplicationJson;
    hscer500ApplicationJsonObject?: Hscer500ApplicationJson;
    hscer502ApplicationJsonObject?: Hscer502ApplicationJson;
    hscer503ApplicationJsonObject?: Hscer503ApplicationJson;
    hscer504ApplicationJsonObject?: Hscer504ApplicationJson;
}
