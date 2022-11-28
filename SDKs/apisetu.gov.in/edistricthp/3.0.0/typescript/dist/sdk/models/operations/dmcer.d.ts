import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DmcerRequestBodyCertificateParameters extends SpeakeasyBase {
    udf1: string;
}
export declare enum DmcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class DmcerRequestBody extends SpeakeasyBase {
    certificateParameters?: DmcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: DmcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class DmcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Dmcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Dmcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Dmcer400ApplicationJson extends SpeakeasyBase {
    error?: Dmcer400ApplicationJsonErrorEnum;
    errorDescription?: Dmcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dmcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Dmcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Dmcer401ApplicationJson extends SpeakeasyBase {
    error?: Dmcer401ApplicationJsonErrorEnum;
    errorDescription?: Dmcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dmcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Dmcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Dmcer404ApplicationJson extends SpeakeasyBase {
    error?: Dmcer404ApplicationJsonErrorEnum;
    errorDescription?: Dmcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dmcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Dmcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Dmcer500ApplicationJson extends SpeakeasyBase {
    error?: Dmcer500ApplicationJsonErrorEnum;
    errorDescription?: Dmcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dmcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Dmcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Dmcer502ApplicationJson extends SpeakeasyBase {
    error?: Dmcer502ApplicationJsonErrorEnum;
    errorDescription?: Dmcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dmcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Dmcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Dmcer503ApplicationJson extends SpeakeasyBase {
    error?: Dmcer503ApplicationJsonErrorEnum;
    errorDescription?: Dmcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dmcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Dmcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Dmcer504ApplicationJson extends SpeakeasyBase {
    error?: Dmcer504ApplicationJsonErrorEnum;
    errorDescription?: Dmcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class DmcerRequest extends SpeakeasyBase {
    request?: DmcerRequestBody;
    security: DmcerSecurity;
}
export declare class DmcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dmcer400ApplicationJsonObject?: Dmcer400ApplicationJson;
    dmcer401ApplicationJsonObject?: Dmcer401ApplicationJson;
    dmcer404ApplicationJsonObject?: Dmcer404ApplicationJson;
    dmcer500ApplicationJsonObject?: Dmcer500ApplicationJson;
    dmcer502ApplicationJsonObject?: Dmcer502ApplicationJson;
    dmcer503ApplicationJsonObject?: Dmcer503ApplicationJson;
    dmcer504ApplicationJsonObject?: Dmcer504ApplicationJson;
}
