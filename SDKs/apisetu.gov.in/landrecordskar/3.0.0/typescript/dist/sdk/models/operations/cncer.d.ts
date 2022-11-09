import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CncerRequestBodyCertificateParameters extends SpeakeasyBase {
    documentNumber: string;
}
export declare enum CncerRequestBodyFormatEnum {
    Xml = "xml",
    Pdf = "pdf"
}
export declare class CncerRequestBody extends SpeakeasyBase {
    certificateParameters?: CncerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: CncerRequestBodyFormatEnum;
    txnId: string;
}
export declare class CncerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class CncerRequest extends SpeakeasyBase {
    request?: CncerRequestBody;
    security: CncerSecurity;
}
export declare enum Cncer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cncer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Cncer400ApplicationJson extends SpeakeasyBase {
    error?: Cncer400ApplicationJsonErrorEnum;
    errorDescription?: Cncer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cncer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cncer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Cncer401ApplicationJson extends SpeakeasyBase {
    error?: Cncer401ApplicationJsonErrorEnum;
    errorDescription?: Cncer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cncer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cncer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Cncer404ApplicationJson extends SpeakeasyBase {
    error?: Cncer404ApplicationJsonErrorEnum;
    errorDescription?: Cncer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cncer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cncer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Cncer500ApplicationJson extends SpeakeasyBase {
    error?: Cncer500ApplicationJsonErrorEnum;
    errorDescription?: Cncer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cncer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cncer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Cncer502ApplicationJson extends SpeakeasyBase {
    error?: Cncer502ApplicationJsonErrorEnum;
    errorDescription?: Cncer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cncer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cncer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Cncer503ApplicationJson extends SpeakeasyBase {
    error?: Cncer503ApplicationJsonErrorEnum;
    errorDescription?: Cncer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cncer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cncer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Cncer504ApplicationJson extends SpeakeasyBase {
    error?: Cncer504ApplicationJsonErrorEnum;
    errorDescription?: Cncer504ApplicationJsonErrorDescriptionEnum;
}
export declare class CncerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    cncer400ApplicationJsonObject?: Cncer400ApplicationJson;
    cncer401ApplicationJsonObject?: Cncer401ApplicationJson;
    cncer404ApplicationJsonObject?: Cncer404ApplicationJson;
    cncer500ApplicationJsonObject?: Cncer500ApplicationJson;
    cncer502ApplicationJsonObject?: Cncer502ApplicationJson;
    cncer503ApplicationJsonObject?: Cncer503ApplicationJson;
    cncer504ApplicationJsonObject?: Cncer504ApplicationJson;
}
