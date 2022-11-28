import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OscerRequestBodyCertificateParameters extends SpeakeasyBase {
    aplno: string;
    certno: string;
    sccd: string;
}
export declare enum OscerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class OscerRequestBody extends SpeakeasyBase {
    certificateParameters?: OscerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: OscerRequestBodyFormatEnum;
    txnId: string;
}
export declare class OscerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Oscer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Oscer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Oscer400ApplicationJson extends SpeakeasyBase {
    error?: Oscer400ApplicationJsonErrorEnum;
    errorDescription?: Oscer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Oscer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Oscer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Oscer401ApplicationJson extends SpeakeasyBase {
    error?: Oscer401ApplicationJsonErrorEnum;
    errorDescription?: Oscer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Oscer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Oscer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Oscer404ApplicationJson extends SpeakeasyBase {
    error?: Oscer404ApplicationJsonErrorEnum;
    errorDescription?: Oscer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Oscer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Oscer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Oscer500ApplicationJson extends SpeakeasyBase {
    error?: Oscer500ApplicationJsonErrorEnum;
    errorDescription?: Oscer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Oscer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Oscer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Oscer502ApplicationJson extends SpeakeasyBase {
    error?: Oscer502ApplicationJsonErrorEnum;
    errorDescription?: Oscer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Oscer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Oscer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Oscer503ApplicationJson extends SpeakeasyBase {
    error?: Oscer503ApplicationJsonErrorEnum;
    errorDescription?: Oscer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Oscer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Oscer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Oscer504ApplicationJson extends SpeakeasyBase {
    error?: Oscer504ApplicationJsonErrorEnum;
    errorDescription?: Oscer504ApplicationJsonErrorDescriptionEnum;
}
export declare class OscerRequest extends SpeakeasyBase {
    request?: OscerRequestBody;
    security: OscerSecurity;
}
export declare class OscerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    oscer400ApplicationJsonObject?: Oscer400ApplicationJson;
    oscer401ApplicationJsonObject?: Oscer401ApplicationJson;
    oscer404ApplicationJsonObject?: Oscer404ApplicationJson;
    oscer500ApplicationJsonObject?: Oscer500ApplicationJson;
    oscer502ApplicationJsonObject?: Oscer502ApplicationJson;
    oscer503ApplicationJsonObject?: Oscer503ApplicationJson;
    oscer504ApplicationJsonObject?: Oscer504ApplicationJson;
}
