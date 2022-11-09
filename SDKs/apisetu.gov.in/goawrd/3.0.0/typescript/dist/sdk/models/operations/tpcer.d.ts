import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TpcerRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    registration: string;
}
export declare enum TpcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class TpcerRequestBody extends SpeakeasyBase {
    certificateParameters?: TpcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: TpcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class TpcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class TpcerRequest extends SpeakeasyBase {
    request?: TpcerRequestBody;
    security: TpcerSecurity;
}
export declare enum Tpcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Tpcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Tpcer400ApplicationJson extends SpeakeasyBase {
    error?: Tpcer400ApplicationJsonErrorEnum;
    errorDescription?: Tpcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tpcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Tpcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Tpcer401ApplicationJson extends SpeakeasyBase {
    error?: Tpcer401ApplicationJsonErrorEnum;
    errorDescription?: Tpcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tpcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Tpcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Tpcer404ApplicationJson extends SpeakeasyBase {
    error?: Tpcer404ApplicationJsonErrorEnum;
    errorDescription?: Tpcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tpcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Tpcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Tpcer500ApplicationJson extends SpeakeasyBase {
    error?: Tpcer500ApplicationJsonErrorEnum;
    errorDescription?: Tpcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tpcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Tpcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Tpcer502ApplicationJson extends SpeakeasyBase {
    error?: Tpcer502ApplicationJsonErrorEnum;
    errorDescription?: Tpcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tpcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Tpcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Tpcer503ApplicationJson extends SpeakeasyBase {
    error?: Tpcer503ApplicationJsonErrorEnum;
    errorDescription?: Tpcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tpcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Tpcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Tpcer504ApplicationJson extends SpeakeasyBase {
    error?: Tpcer504ApplicationJsonErrorEnum;
    errorDescription?: Tpcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class TpcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tpcer400ApplicationJsonObject?: Tpcer400ApplicationJson;
    tpcer401ApplicationJsonObject?: Tpcer401ApplicationJson;
    tpcer404ApplicationJsonObject?: Tpcer404ApplicationJson;
    tpcer500ApplicationJsonObject?: Tpcer500ApplicationJson;
    tpcer502ApplicationJsonObject?: Tpcer502ApplicationJson;
    tpcer503ApplicationJsonObject?: Tpcer503ApplicationJson;
    tpcer504ApplicationJsonObject?: Tpcer504ApplicationJson;
}
