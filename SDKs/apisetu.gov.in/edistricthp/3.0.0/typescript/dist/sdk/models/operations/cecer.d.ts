import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CecerRequestBodyCertificateParameters extends SpeakeasyBase {
    udf1: string;
}
export declare enum CecerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class CecerRequestBody extends SpeakeasyBase {
    certificateParameters?: CecerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: CecerRequestBodyFormatEnum;
    txnId: string;
}
export declare class CecerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Cecer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cecer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Cecer400ApplicationJson extends SpeakeasyBase {
    error?: Cecer400ApplicationJsonErrorEnum;
    errorDescription?: Cecer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cecer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cecer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Cecer401ApplicationJson extends SpeakeasyBase {
    error?: Cecer401ApplicationJsonErrorEnum;
    errorDescription?: Cecer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cecer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cecer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Cecer404ApplicationJson extends SpeakeasyBase {
    error?: Cecer404ApplicationJsonErrorEnum;
    errorDescription?: Cecer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cecer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cecer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Cecer500ApplicationJson extends SpeakeasyBase {
    error?: Cecer500ApplicationJsonErrorEnum;
    errorDescription?: Cecer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cecer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cecer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Cecer502ApplicationJson extends SpeakeasyBase {
    error?: Cecer502ApplicationJsonErrorEnum;
    errorDescription?: Cecer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cecer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cecer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Cecer503ApplicationJson extends SpeakeasyBase {
    error?: Cecer503ApplicationJsonErrorEnum;
    errorDescription?: Cecer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cecer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cecer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Cecer504ApplicationJson extends SpeakeasyBase {
    error?: Cecer504ApplicationJsonErrorEnum;
    errorDescription?: Cecer504ApplicationJsonErrorDescriptionEnum;
}
export declare class CecerRequest extends SpeakeasyBase {
    request?: CecerRequestBody;
    security: CecerSecurity;
}
export declare class CecerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cecer400ApplicationJsonObject?: Cecer400ApplicationJson;
    cecer401ApplicationJsonObject?: Cecer401ApplicationJson;
    cecer404ApplicationJsonObject?: Cecer404ApplicationJson;
    cecer500ApplicationJsonObject?: Cecer500ApplicationJson;
    cecer502ApplicationJsonObject?: Cecer502ApplicationJson;
    cecer503ApplicationJsonObject?: Cecer503ApplicationJson;
    cecer504ApplicationJsonObject?: Cecer504ApplicationJson;
}
