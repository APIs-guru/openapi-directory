import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NtcerRequestBodyCertificateParameters extends SpeakeasyBase {
    aplno: string;
    certno: string;
    sccd: string;
}
export declare enum NtcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class NtcerRequestBody extends SpeakeasyBase {
    certificateParameters?: NtcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: NtcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class NtcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Ntcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ntcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Ntcer400ApplicationJson extends SpeakeasyBase {
    error?: Ntcer400ApplicationJsonErrorEnum;
    errorDescription?: Ntcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ntcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ntcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Ntcer401ApplicationJson extends SpeakeasyBase {
    error?: Ntcer401ApplicationJsonErrorEnum;
    errorDescription?: Ntcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ntcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ntcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Ntcer404ApplicationJson extends SpeakeasyBase {
    error?: Ntcer404ApplicationJsonErrorEnum;
    errorDescription?: Ntcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ntcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ntcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Ntcer500ApplicationJson extends SpeakeasyBase {
    error?: Ntcer500ApplicationJsonErrorEnum;
    errorDescription?: Ntcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ntcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ntcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Ntcer502ApplicationJson extends SpeakeasyBase {
    error?: Ntcer502ApplicationJsonErrorEnum;
    errorDescription?: Ntcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ntcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ntcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Ntcer503ApplicationJson extends SpeakeasyBase {
    error?: Ntcer503ApplicationJsonErrorEnum;
    errorDescription?: Ntcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ntcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ntcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Ntcer504ApplicationJson extends SpeakeasyBase {
    error?: Ntcer504ApplicationJsonErrorEnum;
    errorDescription?: Ntcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class NtcerRequest extends SpeakeasyBase {
    request?: NtcerRequestBody;
    security: NtcerSecurity;
}
export declare class NtcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ntcer400ApplicationJsonObject?: Ntcer400ApplicationJson;
    ntcer401ApplicationJsonObject?: Ntcer401ApplicationJson;
    ntcer404ApplicationJsonObject?: Ntcer404ApplicationJson;
    ntcer500ApplicationJsonObject?: Ntcer500ApplicationJson;
    ntcer502ApplicationJsonObject?: Ntcer502ApplicationJson;
    ntcer503ApplicationJsonObject?: Ntcer503ApplicationJson;
    ntcer504ApplicationJsonObject?: Ntcer504ApplicationJson;
}
