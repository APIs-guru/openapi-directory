import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PncerRequestBodyCertificateParameters extends SpeakeasyBase {
    aplno: string;
    certno: string;
    sccd: string;
}
export declare enum PncerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class PncerRequestBody extends SpeakeasyBase {
    certificateParameters?: PncerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: PncerRequestBodyFormatEnum;
    txnId: string;
}
export declare class PncerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class PncerRequest extends SpeakeasyBase {
    request?: PncerRequestBody;
    security: PncerSecurity;
}
export declare enum Pncer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Pncer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Pncer400ApplicationJson extends SpeakeasyBase {
    error?: Pncer400ApplicationJsonErrorEnum;
    errorDescription?: Pncer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pncer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Pncer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Pncer401ApplicationJson extends SpeakeasyBase {
    error?: Pncer401ApplicationJsonErrorEnum;
    errorDescription?: Pncer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pncer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Pncer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Pncer404ApplicationJson extends SpeakeasyBase {
    error?: Pncer404ApplicationJsonErrorEnum;
    errorDescription?: Pncer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pncer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Pncer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Pncer500ApplicationJson extends SpeakeasyBase {
    error?: Pncer500ApplicationJsonErrorEnum;
    errorDescription?: Pncer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pncer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Pncer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Pncer502ApplicationJson extends SpeakeasyBase {
    error?: Pncer502ApplicationJsonErrorEnum;
    errorDescription?: Pncer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pncer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Pncer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Pncer503ApplicationJson extends SpeakeasyBase {
    error?: Pncer503ApplicationJsonErrorEnum;
    errorDescription?: Pncer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pncer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Pncer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Pncer504ApplicationJson extends SpeakeasyBase {
    error?: Pncer504ApplicationJsonErrorEnum;
    errorDescription?: Pncer504ApplicationJsonErrorDescriptionEnum;
}
export declare class PncerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pncer400ApplicationJsonObject?: Pncer400ApplicationJson;
    pncer401ApplicationJsonObject?: Pncer401ApplicationJson;
    pncer404ApplicationJsonObject?: Pncer404ApplicationJson;
    pncer500ApplicationJsonObject?: Pncer500ApplicationJson;
    pncer502ApplicationJsonObject?: Pncer502ApplicationJson;
    pncer503ApplicationJsonObject?: Pncer503ApplicationJson;
    pncer504ApplicationJsonObject?: Pncer504ApplicationJson;
}
