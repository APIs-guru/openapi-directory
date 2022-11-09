import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TdcerRequestBodyCertificateParameters extends SpeakeasyBase {
    custId: string;
    dob: string;
    finYr: string;
}
export declare enum TdcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class TdcerRequestBody extends SpeakeasyBase {
    certificateParameters?: TdcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: TdcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class TdcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class TdcerRequest extends SpeakeasyBase {
    request?: TdcerRequestBody;
    security: TdcerSecurity;
}
export declare enum Tdcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Tdcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Tdcer400ApplicationJson extends SpeakeasyBase {
    error?: Tdcer400ApplicationJsonErrorEnum;
    errorDescription?: Tdcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tdcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Tdcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Tdcer401ApplicationJson extends SpeakeasyBase {
    error?: Tdcer401ApplicationJsonErrorEnum;
    errorDescription?: Tdcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tdcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Tdcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Tdcer404ApplicationJson extends SpeakeasyBase {
    error?: Tdcer404ApplicationJsonErrorEnum;
    errorDescription?: Tdcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tdcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Tdcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Tdcer500ApplicationJson extends SpeakeasyBase {
    error?: Tdcer500ApplicationJsonErrorEnum;
    errorDescription?: Tdcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tdcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Tdcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Tdcer502ApplicationJson extends SpeakeasyBase {
    error?: Tdcer502ApplicationJsonErrorEnum;
    errorDescription?: Tdcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tdcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Tdcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Tdcer503ApplicationJson extends SpeakeasyBase {
    error?: Tdcer503ApplicationJsonErrorEnum;
    errorDescription?: Tdcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tdcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Tdcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Tdcer504ApplicationJson extends SpeakeasyBase {
    error?: Tdcer504ApplicationJsonErrorEnum;
    errorDescription?: Tdcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class TdcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tdcer400ApplicationJsonObject?: Tdcer400ApplicationJson;
    tdcer401ApplicationJsonObject?: Tdcer401ApplicationJson;
    tdcer404ApplicationJsonObject?: Tdcer404ApplicationJson;
    tdcer500ApplicationJsonObject?: Tdcer500ApplicationJson;
    tdcer502ApplicationJsonObject?: Tdcer502ApplicationJson;
    tdcer503ApplicationJsonObject?: Tdcer503ApplicationJson;
    tdcer504ApplicationJsonObject?: Tdcer504ApplicationJson;
}
