import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpcerRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    exsession: string;
    rollnumber: string;
    totalmarks: string;
    year: string;
}
export declare enum SpcerRequestBodyFormatEnum {
    Xml = "xml",
    Pdf = "pdf"
}
export declare class SpcerRequestBody extends SpeakeasyBase {
    certificateParameters?: SpcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: SpcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class SpcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Spcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Spcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Spcer400ApplicationJson extends SpeakeasyBase {
    error?: Spcer400ApplicationJsonErrorEnum;
    errorDescription?: Spcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Spcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Spcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Spcer401ApplicationJson extends SpeakeasyBase {
    error?: Spcer401ApplicationJsonErrorEnum;
    errorDescription?: Spcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Spcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Spcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Spcer404ApplicationJson extends SpeakeasyBase {
    error?: Spcer404ApplicationJsonErrorEnum;
    errorDescription?: Spcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Spcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Spcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Spcer500ApplicationJson extends SpeakeasyBase {
    error?: Spcer500ApplicationJsonErrorEnum;
    errorDescription?: Spcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Spcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Spcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Spcer502ApplicationJson extends SpeakeasyBase {
    error?: Spcer502ApplicationJsonErrorEnum;
    errorDescription?: Spcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Spcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Spcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Spcer503ApplicationJson extends SpeakeasyBase {
    error?: Spcer503ApplicationJsonErrorEnum;
    errorDescription?: Spcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Spcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Spcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Spcer504ApplicationJson extends SpeakeasyBase {
    error?: Spcer504ApplicationJsonErrorEnum;
    errorDescription?: Spcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class SpcerRequest extends SpeakeasyBase {
    request?: SpcerRequestBody;
    security: SpcerSecurity;
}
export declare class SpcerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    spcer400ApplicationJsonObject?: Spcer400ApplicationJson;
    spcer401ApplicationJsonObject?: Spcer401ApplicationJson;
    spcer404ApplicationJsonObject?: Spcer404ApplicationJson;
    spcer500ApplicationJsonObject?: Spcer500ApplicationJson;
    spcer502ApplicationJsonObject?: Spcer502ApplicationJson;
    spcer503ApplicationJsonObject?: Spcer503ApplicationJson;
    spcer504ApplicationJsonObject?: Spcer504ApplicationJson;
}
