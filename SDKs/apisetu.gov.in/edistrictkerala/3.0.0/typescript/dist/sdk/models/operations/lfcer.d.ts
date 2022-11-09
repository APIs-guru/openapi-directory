import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LfcerRequestBodyCertificateParameters extends SpeakeasyBase {
    aplno: string;
    certno: string;
    sccd: string;
}
export declare enum LfcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class LfcerRequestBody extends SpeakeasyBase {
    certificateParameters?: LfcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: LfcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class LfcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class LfcerRequest extends SpeakeasyBase {
    request?: LfcerRequestBody;
    security: LfcerSecurity;
}
export declare enum Lfcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Lfcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Lfcer400ApplicationJson extends SpeakeasyBase {
    error?: Lfcer400ApplicationJsonErrorEnum;
    errorDescription?: Lfcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lfcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Lfcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Lfcer401ApplicationJson extends SpeakeasyBase {
    error?: Lfcer401ApplicationJsonErrorEnum;
    errorDescription?: Lfcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lfcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Lfcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Lfcer404ApplicationJson extends SpeakeasyBase {
    error?: Lfcer404ApplicationJsonErrorEnum;
    errorDescription?: Lfcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lfcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Lfcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Lfcer500ApplicationJson extends SpeakeasyBase {
    error?: Lfcer500ApplicationJsonErrorEnum;
    errorDescription?: Lfcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lfcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Lfcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Lfcer502ApplicationJson extends SpeakeasyBase {
    error?: Lfcer502ApplicationJsonErrorEnum;
    errorDescription?: Lfcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lfcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Lfcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Lfcer503ApplicationJson extends SpeakeasyBase {
    error?: Lfcer503ApplicationJsonErrorEnum;
    errorDescription?: Lfcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lfcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Lfcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Lfcer504ApplicationJson extends SpeakeasyBase {
    error?: Lfcer504ApplicationJsonErrorEnum;
    errorDescription?: Lfcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class LfcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    lfcer400ApplicationJsonObject?: Lfcer400ApplicationJson;
    lfcer401ApplicationJsonObject?: Lfcer401ApplicationJson;
    lfcer404ApplicationJsonObject?: Lfcer404ApplicationJson;
    lfcer500ApplicationJsonObject?: Lfcer500ApplicationJson;
    lfcer502ApplicationJsonObject?: Lfcer502ApplicationJson;
    lfcer503ApplicationJsonObject?: Lfcer503ApplicationJson;
    lfcer504ApplicationJsonObject?: Lfcer504ApplicationJson;
}
