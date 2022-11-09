import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LocerRequestBodyCertificateParameters extends SpeakeasyBase {
    aplno: string;
    certno: string;
    sccd: string;
}
export declare enum LocerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class LocerRequestBody extends SpeakeasyBase {
    certificateParameters?: LocerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: LocerRequestBodyFormatEnum;
    txnId: string;
}
export declare class LocerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class LocerRequest extends SpeakeasyBase {
    request?: LocerRequestBody;
    security: LocerSecurity;
}
export declare enum Locer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Locer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Locer400ApplicationJson extends SpeakeasyBase {
    error?: Locer400ApplicationJsonErrorEnum;
    errorDescription?: Locer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Locer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Locer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Locer401ApplicationJson extends SpeakeasyBase {
    error?: Locer401ApplicationJsonErrorEnum;
    errorDescription?: Locer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Locer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Locer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Locer404ApplicationJson extends SpeakeasyBase {
    error?: Locer404ApplicationJsonErrorEnum;
    errorDescription?: Locer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Locer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Locer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Locer500ApplicationJson extends SpeakeasyBase {
    error?: Locer500ApplicationJsonErrorEnum;
    errorDescription?: Locer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Locer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Locer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Locer502ApplicationJson extends SpeakeasyBase {
    error?: Locer502ApplicationJsonErrorEnum;
    errorDescription?: Locer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Locer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Locer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Locer503ApplicationJson extends SpeakeasyBase {
    error?: Locer503ApplicationJsonErrorEnum;
    errorDescription?: Locer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Locer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Locer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Locer504ApplicationJson extends SpeakeasyBase {
    error?: Locer504ApplicationJsonErrorEnum;
    errorDescription?: Locer504ApplicationJsonErrorDescriptionEnum;
}
export declare class LocerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    locer400ApplicationJsonObject?: Locer400ApplicationJson;
    locer401ApplicationJsonObject?: Locer401ApplicationJson;
    locer404ApplicationJsonObject?: Locer404ApplicationJson;
    locer500ApplicationJsonObject?: Locer500ApplicationJson;
    locer502ApplicationJsonObject?: Locer502ApplicationJson;
    locer503ApplicationJsonObject?: Locer503ApplicationJson;
    locer504ApplicationJsonObject?: Locer504ApplicationJson;
}
