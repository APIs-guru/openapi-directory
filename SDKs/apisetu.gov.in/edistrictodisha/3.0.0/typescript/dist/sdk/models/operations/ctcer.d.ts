import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CtcerRequestBodyCertificateParameters extends SpeakeasyBase {
    uid: string;
    refno: string;
}
export declare enum CtcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class CtcerRequestBody extends SpeakeasyBase {
    certificateParameters?: CtcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: CtcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class CtcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Ctcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ctcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Ctcer400ApplicationJson extends SpeakeasyBase {
    error?: Ctcer400ApplicationJsonErrorEnum;
    errorDescription?: Ctcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ctcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ctcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Ctcer401ApplicationJson extends SpeakeasyBase {
    error?: Ctcer401ApplicationJsonErrorEnum;
    errorDescription?: Ctcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ctcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ctcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Ctcer404ApplicationJson extends SpeakeasyBase {
    error?: Ctcer404ApplicationJsonErrorEnum;
    errorDescription?: Ctcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ctcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ctcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Ctcer500ApplicationJson extends SpeakeasyBase {
    error?: Ctcer500ApplicationJsonErrorEnum;
    errorDescription?: Ctcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ctcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ctcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Ctcer502ApplicationJson extends SpeakeasyBase {
    error?: Ctcer502ApplicationJsonErrorEnum;
    errorDescription?: Ctcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ctcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ctcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Ctcer503ApplicationJson extends SpeakeasyBase {
    error?: Ctcer503ApplicationJsonErrorEnum;
    errorDescription?: Ctcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ctcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ctcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Ctcer504ApplicationJson extends SpeakeasyBase {
    error?: Ctcer504ApplicationJsonErrorEnum;
    errorDescription?: Ctcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class CtcerRequest extends SpeakeasyBase {
    request?: CtcerRequestBody;
    security: CtcerSecurity;
}
export declare class CtcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ctcer400ApplicationJsonObject?: Ctcer400ApplicationJson;
    ctcer401ApplicationJsonObject?: Ctcer401ApplicationJson;
    ctcer404ApplicationJsonObject?: Ctcer404ApplicationJson;
    ctcer500ApplicationJsonObject?: Ctcer500ApplicationJson;
    ctcer502ApplicationJsonObject?: Ctcer502ApplicationJson;
    ctcer503ApplicationJsonObject?: Ctcer503ApplicationJson;
    ctcer504ApplicationJsonObject?: Ctcer504ApplicationJson;
}
