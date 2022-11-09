import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ErcerRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    registration: string;
}
export declare enum ErcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class ErcerRequestBody extends SpeakeasyBase {
    certificateParameters?: ErcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: ErcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class ErcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class ErcerRequest extends SpeakeasyBase {
    request?: ErcerRequestBody;
    security: ErcerSecurity;
}
export declare enum Ercer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ercer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Ercer400ApplicationJson extends SpeakeasyBase {
    error?: Ercer400ApplicationJsonErrorEnum;
    errorDescription?: Ercer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ercer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ercer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Ercer401ApplicationJson extends SpeakeasyBase {
    error?: Ercer401ApplicationJsonErrorEnum;
    errorDescription?: Ercer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ercer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ercer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Ercer404ApplicationJson extends SpeakeasyBase {
    error?: Ercer404ApplicationJsonErrorEnum;
    errorDescription?: Ercer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ercer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ercer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Ercer500ApplicationJson extends SpeakeasyBase {
    error?: Ercer500ApplicationJsonErrorEnum;
    errorDescription?: Ercer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ercer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ercer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Ercer502ApplicationJson extends SpeakeasyBase {
    error?: Ercer502ApplicationJsonErrorEnum;
    errorDescription?: Ercer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ercer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ercer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Ercer503ApplicationJson extends SpeakeasyBase {
    error?: Ercer503ApplicationJsonErrorEnum;
    errorDescription?: Ercer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ercer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ercer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Ercer504ApplicationJson extends SpeakeasyBase {
    error?: Ercer504ApplicationJsonErrorEnum;
    errorDescription?: Ercer504ApplicationJsonErrorDescriptionEnum;
}
export declare class ErcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ercer400ApplicationJsonObject?: Ercer400ApplicationJson;
    ercer401ApplicationJsonObject?: Ercer401ApplicationJson;
    ercer404ApplicationJsonObject?: Ercer404ApplicationJson;
    ercer500ApplicationJsonObject?: Ercer500ApplicationJson;
    ercer502ApplicationJsonObject?: Ercer502ApplicationJson;
    ercer503ApplicationJsonObject?: Ercer503ApplicationJson;
    ercer504ApplicationJsonObject?: Ercer504ApplicationJson;
}
