import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RdcerRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    regdno: string;
    uid: string;
}
export declare enum RdcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class RdcerRequestBody extends SpeakeasyBase {
    certificateParameters?: RdcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: RdcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class RdcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class RdcerRequest extends SpeakeasyBase {
    request?: RdcerRequestBody;
    security: RdcerSecurity;
}
export declare enum Rdcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Rdcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Rdcer400ApplicationJson extends SpeakeasyBase {
    error?: Rdcer400ApplicationJsonErrorEnum;
    errorDescription?: Rdcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rdcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Rdcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Rdcer401ApplicationJson extends SpeakeasyBase {
    error?: Rdcer401ApplicationJsonErrorEnum;
    errorDescription?: Rdcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rdcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Rdcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Rdcer404ApplicationJson extends SpeakeasyBase {
    error?: Rdcer404ApplicationJsonErrorEnum;
    errorDescription?: Rdcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rdcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Rdcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Rdcer500ApplicationJson extends SpeakeasyBase {
    error?: Rdcer500ApplicationJsonErrorEnum;
    errorDescription?: Rdcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rdcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Rdcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Rdcer502ApplicationJson extends SpeakeasyBase {
    error?: Rdcer502ApplicationJsonErrorEnum;
    errorDescription?: Rdcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rdcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Rdcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Rdcer503ApplicationJson extends SpeakeasyBase {
    error?: Rdcer503ApplicationJsonErrorEnum;
    errorDescription?: Rdcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rdcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Rdcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Rdcer504ApplicationJson extends SpeakeasyBase {
    error?: Rdcer504ApplicationJsonErrorEnum;
    errorDescription?: Rdcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class RdcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rdcer400ApplicationJsonObject?: Rdcer400ApplicationJson;
    rdcer401ApplicationJsonObject?: Rdcer401ApplicationJson;
    rdcer404ApplicationJsonObject?: Rdcer404ApplicationJson;
    rdcer500ApplicationJsonObject?: Rdcer500ApplicationJson;
    rdcer502ApplicationJsonObject?: Rdcer502ApplicationJson;
    rdcer503ApplicationJsonObject?: Rdcer503ApplicationJson;
    rdcer504ApplicationJsonObject?: Rdcer504ApplicationJson;
}
