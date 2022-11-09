import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LlcerRequestBodyCertificateParameters extends SpeakeasyBase {
    udf1: string;
    udf2: string;
    udf3: string;
}
export declare enum LlcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class LlcerRequestBody extends SpeakeasyBase {
    certificateParameters?: LlcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: LlcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class LlcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class LlcerRequest extends SpeakeasyBase {
    request?: LlcerRequestBody;
    security: LlcerSecurity;
}
export declare enum Llcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Llcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Llcer400ApplicationJson extends SpeakeasyBase {
    error?: Llcer400ApplicationJsonErrorEnum;
    errorDescription?: Llcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Llcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Llcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Llcer401ApplicationJson extends SpeakeasyBase {
    error?: Llcer401ApplicationJsonErrorEnum;
    errorDescription?: Llcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Llcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Llcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Llcer404ApplicationJson extends SpeakeasyBase {
    error?: Llcer404ApplicationJsonErrorEnum;
    errorDescription?: Llcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Llcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Llcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Llcer500ApplicationJson extends SpeakeasyBase {
    error?: Llcer500ApplicationJsonErrorEnum;
    errorDescription?: Llcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Llcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Llcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Llcer502ApplicationJson extends SpeakeasyBase {
    error?: Llcer502ApplicationJsonErrorEnum;
    errorDescription?: Llcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Llcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Llcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Llcer503ApplicationJson extends SpeakeasyBase {
    error?: Llcer503ApplicationJsonErrorEnum;
    errorDescription?: Llcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Llcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Llcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Llcer504ApplicationJson extends SpeakeasyBase {
    error?: Llcer504ApplicationJsonErrorEnum;
    errorDescription?: Llcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class LlcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    llcer400ApplicationJsonObject?: Llcer400ApplicationJson;
    llcer401ApplicationJsonObject?: Llcer401ApplicationJson;
    llcer404ApplicationJsonObject?: Llcer404ApplicationJson;
    llcer500ApplicationJsonObject?: Llcer500ApplicationJson;
    llcer502ApplicationJsonObject?: Llcer502ApplicationJson;
    llcer503ApplicationJsonObject?: Llcer503ApplicationJson;
    llcer504ApplicationJsonObject?: Llcer504ApplicationJson;
}
