import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PecerRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    gender: string;
    pan: string;
    ppo: string;
}
export declare enum PecerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class PecerRequestBody extends SpeakeasyBase {
    certificateParameters?: PecerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: PecerRequestBodyFormatEnum;
    txnId: string;
}
export declare class PecerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class PecerRequest extends SpeakeasyBase {
    request?: PecerRequestBody;
    security: PecerSecurity;
}
export declare enum Pecer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Pecer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Pecer400ApplicationJson extends SpeakeasyBase {
    error?: Pecer400ApplicationJsonErrorEnum;
    errorDescription?: Pecer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pecer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Pecer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Pecer401ApplicationJson extends SpeakeasyBase {
    error?: Pecer401ApplicationJsonErrorEnum;
    errorDescription?: Pecer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pecer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Pecer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Pecer404ApplicationJson extends SpeakeasyBase {
    error?: Pecer404ApplicationJsonErrorEnum;
    errorDescription?: Pecer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pecer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Pecer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Pecer500ApplicationJson extends SpeakeasyBase {
    error?: Pecer500ApplicationJsonErrorEnum;
    errorDescription?: Pecer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pecer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Pecer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Pecer502ApplicationJson extends SpeakeasyBase {
    error?: Pecer502ApplicationJsonErrorEnum;
    errorDescription?: Pecer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pecer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Pecer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Pecer503ApplicationJson extends SpeakeasyBase {
    error?: Pecer503ApplicationJsonErrorEnum;
    errorDescription?: Pecer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pecer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Pecer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Pecer504ApplicationJson extends SpeakeasyBase {
    error?: Pecer504ApplicationJsonErrorEnum;
    errorDescription?: Pecer504ApplicationJsonErrorDescriptionEnum;
}
export declare class PecerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pecer400ApplicationJsonObject?: Pecer400ApplicationJson;
    pecer401ApplicationJsonObject?: Pecer401ApplicationJson;
    pecer404ApplicationJsonObject?: Pecer404ApplicationJson;
    pecer500ApplicationJsonObject?: Pecer500ApplicationJson;
    pecer502ApplicationJsonObject?: Pecer502ApplicationJson;
    pecer503ApplicationJsonObject?: Pecer503ApplicationJson;
    pecer504ApplicationJsonObject?: Pecer504ApplicationJson;
}
