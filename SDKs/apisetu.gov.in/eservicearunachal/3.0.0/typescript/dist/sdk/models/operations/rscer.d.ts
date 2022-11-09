import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RscerRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    refNo: string;
    tokenNo: string;
}
export declare enum RscerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class RscerRequestBody extends SpeakeasyBase {
    certificateParameters?: RscerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: RscerRequestBodyFormatEnum;
    txnId: string;
}
export declare class RscerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class RscerRequest extends SpeakeasyBase {
    request?: RscerRequestBody;
    security: RscerSecurity;
}
export declare enum Rscer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Rscer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Rscer400ApplicationJson extends SpeakeasyBase {
    error?: Rscer400ApplicationJsonErrorEnum;
    errorDescription?: Rscer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rscer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Rscer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Rscer401ApplicationJson extends SpeakeasyBase {
    error?: Rscer401ApplicationJsonErrorEnum;
    errorDescription?: Rscer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rscer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Rscer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Rscer404ApplicationJson extends SpeakeasyBase {
    error?: Rscer404ApplicationJsonErrorEnum;
    errorDescription?: Rscer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rscer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Rscer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Rscer500ApplicationJson extends SpeakeasyBase {
    error?: Rscer500ApplicationJsonErrorEnum;
    errorDescription?: Rscer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rscer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Rscer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Rscer502ApplicationJson extends SpeakeasyBase {
    error?: Rscer502ApplicationJsonErrorEnum;
    errorDescription?: Rscer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rscer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Rscer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Rscer503ApplicationJson extends SpeakeasyBase {
    error?: Rscer503ApplicationJsonErrorEnum;
    errorDescription?: Rscer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rscer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Rscer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Rscer504ApplicationJson extends SpeakeasyBase {
    error?: Rscer504ApplicationJsonErrorEnum;
    errorDescription?: Rscer504ApplicationJsonErrorDescriptionEnum;
}
export declare class RscerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rscer400ApplicationJsonObject?: Rscer400ApplicationJson;
    rscer401ApplicationJsonObject?: Rscer401ApplicationJson;
    rscer404ApplicationJsonObject?: Rscer404ApplicationJson;
    rscer500ApplicationJsonObject?: Rscer500ApplicationJson;
    rscer502ApplicationJsonObject?: Rscer502ApplicationJson;
    rscer503ApplicationJsonObject?: Rscer503ApplicationJson;
    rscer504ApplicationJsonObject?: Rscer504ApplicationJson;
}
