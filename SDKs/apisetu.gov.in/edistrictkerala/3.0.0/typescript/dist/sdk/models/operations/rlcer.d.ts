import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RlcerRequestBodyCertificateParameters extends SpeakeasyBase {
    aplno: string;
    certno: string;
    sccd: string;
}
export declare enum RlcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class RlcerRequestBody extends SpeakeasyBase {
    certificateParameters?: RlcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: RlcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class RlcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class RlcerRequest extends SpeakeasyBase {
    request?: RlcerRequestBody;
    security: RlcerSecurity;
}
export declare enum Rlcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Rlcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Rlcer400ApplicationJson extends SpeakeasyBase {
    error?: Rlcer400ApplicationJsonErrorEnum;
    errorDescription?: Rlcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rlcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Rlcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Rlcer401ApplicationJson extends SpeakeasyBase {
    error?: Rlcer401ApplicationJsonErrorEnum;
    errorDescription?: Rlcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rlcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Rlcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Rlcer404ApplicationJson extends SpeakeasyBase {
    error?: Rlcer404ApplicationJsonErrorEnum;
    errorDescription?: Rlcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rlcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Rlcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Rlcer500ApplicationJson extends SpeakeasyBase {
    error?: Rlcer500ApplicationJsonErrorEnum;
    errorDescription?: Rlcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rlcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Rlcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Rlcer502ApplicationJson extends SpeakeasyBase {
    error?: Rlcer502ApplicationJsonErrorEnum;
    errorDescription?: Rlcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rlcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Rlcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Rlcer503ApplicationJson extends SpeakeasyBase {
    error?: Rlcer503ApplicationJsonErrorEnum;
    errorDescription?: Rlcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rlcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Rlcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Rlcer504ApplicationJson extends SpeakeasyBase {
    error?: Rlcer504ApplicationJsonErrorEnum;
    errorDescription?: Rlcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class RlcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rlcer400ApplicationJsonObject?: Rlcer400ApplicationJson;
    rlcer401ApplicationJsonObject?: Rlcer401ApplicationJson;
    rlcer404ApplicationJsonObject?: Rlcer404ApplicationJson;
    rlcer500ApplicationJsonObject?: Rlcer500ApplicationJson;
    rlcer502ApplicationJsonObject?: Rlcer502ApplicationJson;
    rlcer503ApplicationJsonObject?: Rlcer503ApplicationJson;
    rlcer504ApplicationJsonObject?: Rlcer504ApplicationJson;
}
