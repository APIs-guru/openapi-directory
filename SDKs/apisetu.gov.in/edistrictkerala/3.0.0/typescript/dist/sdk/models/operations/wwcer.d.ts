import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WwcerRequestBodyCertificateParameters extends SpeakeasyBase {
    aplno: string;
    certno: string;
    sccd: string;
}
export declare enum WwcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class WwcerRequestBody extends SpeakeasyBase {
    certificateParameters?: WwcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: WwcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class WwcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Wwcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Wwcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Wwcer400ApplicationJson extends SpeakeasyBase {
    error?: Wwcer400ApplicationJsonErrorEnum;
    errorDescription?: Wwcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Wwcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Wwcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Wwcer401ApplicationJson extends SpeakeasyBase {
    error?: Wwcer401ApplicationJsonErrorEnum;
    errorDescription?: Wwcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Wwcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Wwcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Wwcer404ApplicationJson extends SpeakeasyBase {
    error?: Wwcer404ApplicationJsonErrorEnum;
    errorDescription?: Wwcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Wwcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Wwcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Wwcer500ApplicationJson extends SpeakeasyBase {
    error?: Wwcer500ApplicationJsonErrorEnum;
    errorDescription?: Wwcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Wwcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Wwcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Wwcer502ApplicationJson extends SpeakeasyBase {
    error?: Wwcer502ApplicationJsonErrorEnum;
    errorDescription?: Wwcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Wwcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Wwcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Wwcer503ApplicationJson extends SpeakeasyBase {
    error?: Wwcer503ApplicationJsonErrorEnum;
    errorDescription?: Wwcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Wwcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Wwcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Wwcer504ApplicationJson extends SpeakeasyBase {
    error?: Wwcer504ApplicationJsonErrorEnum;
    errorDescription?: Wwcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class WwcerRequest extends SpeakeasyBase {
    request?: WwcerRequestBody;
    security: WwcerSecurity;
}
export declare class WwcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    wwcer400ApplicationJsonObject?: Wwcer400ApplicationJson;
    wwcer401ApplicationJsonObject?: Wwcer401ApplicationJson;
    wwcer404ApplicationJsonObject?: Wwcer404ApplicationJson;
    wwcer500ApplicationJsonObject?: Wwcer500ApplicationJson;
    wwcer502ApplicationJsonObject?: Wwcer502ApplicationJson;
    wwcer503ApplicationJsonObject?: Wwcer503ApplicationJson;
    wwcer504ApplicationJsonObject?: Wwcer504ApplicationJson;
}
