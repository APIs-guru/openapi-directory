import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DscerRequestBodyCertificateParameters extends SpeakeasyBase {
    aplno: string;
    certno: string;
    sccd: string;
}
export declare enum DscerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class DscerRequestBody extends SpeakeasyBase {
    certificateParameters?: DscerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: DscerRequestBodyFormatEnum;
    txnId: string;
}
export declare class DscerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class DscerRequest extends SpeakeasyBase {
    request?: DscerRequestBody;
    security: DscerSecurity;
}
export declare enum Dscer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Dscer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Dscer400ApplicationJson extends SpeakeasyBase {
    error?: Dscer400ApplicationJsonErrorEnum;
    errorDescription?: Dscer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dscer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Dscer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Dscer401ApplicationJson extends SpeakeasyBase {
    error?: Dscer401ApplicationJsonErrorEnum;
    errorDescription?: Dscer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dscer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Dscer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Dscer404ApplicationJson extends SpeakeasyBase {
    error?: Dscer404ApplicationJsonErrorEnum;
    errorDescription?: Dscer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dscer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Dscer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Dscer500ApplicationJson extends SpeakeasyBase {
    error?: Dscer500ApplicationJsonErrorEnum;
    errorDescription?: Dscer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dscer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Dscer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Dscer502ApplicationJson extends SpeakeasyBase {
    error?: Dscer502ApplicationJsonErrorEnum;
    errorDescription?: Dscer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dscer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Dscer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Dscer503ApplicationJson extends SpeakeasyBase {
    error?: Dscer503ApplicationJsonErrorEnum;
    errorDescription?: Dscer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dscer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Dscer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Dscer504ApplicationJson extends SpeakeasyBase {
    error?: Dscer504ApplicationJsonErrorEnum;
    errorDescription?: Dscer504ApplicationJsonErrorDescriptionEnum;
}
export declare class DscerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dscer400ApplicationJsonObject?: Dscer400ApplicationJson;
    dscer401ApplicationJsonObject?: Dscer401ApplicationJson;
    dscer404ApplicationJsonObject?: Dscer404ApplicationJson;
    dscer500ApplicationJsonObject?: Dscer500ApplicationJson;
    dscer502ApplicationJsonObject?: Dscer502ApplicationJson;
    dscer503ApplicationJsonObject?: Dscer503ApplicationJson;
    dscer504ApplicationJsonObject?: Dscer504ApplicationJson;
}
