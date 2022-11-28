import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RmcerRequestBodyCertificateParameters extends SpeakeasyBase {
    appno: string;
    certno: string;
}
export declare enum RmcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class RmcerRequestBody extends SpeakeasyBase {
    certificateParameters?: RmcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: RmcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class RmcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Rmcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Rmcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Rmcer400ApplicationJson extends SpeakeasyBase {
    error?: Rmcer400ApplicationJsonErrorEnum;
    errorDescription?: Rmcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rmcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Rmcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Rmcer401ApplicationJson extends SpeakeasyBase {
    error?: Rmcer401ApplicationJsonErrorEnum;
    errorDescription?: Rmcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rmcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Rmcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Rmcer404ApplicationJson extends SpeakeasyBase {
    error?: Rmcer404ApplicationJsonErrorEnum;
    errorDescription?: Rmcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rmcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Rmcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Rmcer500ApplicationJson extends SpeakeasyBase {
    error?: Rmcer500ApplicationJsonErrorEnum;
    errorDescription?: Rmcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rmcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Rmcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Rmcer502ApplicationJson extends SpeakeasyBase {
    error?: Rmcer502ApplicationJsonErrorEnum;
    errorDescription?: Rmcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rmcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Rmcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Rmcer503ApplicationJson extends SpeakeasyBase {
    error?: Rmcer503ApplicationJsonErrorEnum;
    errorDescription?: Rmcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rmcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Rmcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Rmcer504ApplicationJson extends SpeakeasyBase {
    error?: Rmcer504ApplicationJsonErrorEnum;
    errorDescription?: Rmcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class RmcerRequest extends SpeakeasyBase {
    request?: RmcerRequestBody;
    security: RmcerSecurity;
}
export declare class RmcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rmcer400ApplicationJsonObject?: Rmcer400ApplicationJson;
    rmcer401ApplicationJsonObject?: Rmcer401ApplicationJson;
    rmcer404ApplicationJsonObject?: Rmcer404ApplicationJson;
    rmcer500ApplicationJsonObject?: Rmcer500ApplicationJson;
    rmcer502ApplicationJsonObject?: Rmcer502ApplicationJson;
    rmcer503ApplicationJsonObject?: Rmcer503ApplicationJson;
    rmcer504ApplicationJsonObject?: Rmcer504ApplicationJson;
}
