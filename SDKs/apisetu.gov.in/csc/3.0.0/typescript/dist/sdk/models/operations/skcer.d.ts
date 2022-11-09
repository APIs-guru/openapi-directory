import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SkcerRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    certificateType: string;
    username: string;
}
export declare enum SkcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class SkcerRequestBody extends SpeakeasyBase {
    certificateParameters?: SkcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: SkcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class SkcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class SkcerRequest extends SpeakeasyBase {
    request?: SkcerRequestBody;
    security: SkcerSecurity;
}
export declare enum Skcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Skcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Skcer400ApplicationJson extends SpeakeasyBase {
    error?: Skcer400ApplicationJsonErrorEnum;
    errorDescription?: Skcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Skcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Skcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Skcer401ApplicationJson extends SpeakeasyBase {
    error?: Skcer401ApplicationJsonErrorEnum;
    errorDescription?: Skcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Skcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Skcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Skcer404ApplicationJson extends SpeakeasyBase {
    error?: Skcer404ApplicationJsonErrorEnum;
    errorDescription?: Skcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Skcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Skcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Skcer500ApplicationJson extends SpeakeasyBase {
    error?: Skcer500ApplicationJsonErrorEnum;
    errorDescription?: Skcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Skcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Skcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Skcer502ApplicationJson extends SpeakeasyBase {
    error?: Skcer502ApplicationJsonErrorEnum;
    errorDescription?: Skcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Skcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Skcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Skcer503ApplicationJson extends SpeakeasyBase {
    error?: Skcer503ApplicationJsonErrorEnum;
    errorDescription?: Skcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Skcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Skcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Skcer504ApplicationJson extends SpeakeasyBase {
    error?: Skcer504ApplicationJsonErrorEnum;
    errorDescription?: Skcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class SkcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    skcer400ApplicationJsonObject?: Skcer400ApplicationJson;
    skcer401ApplicationJsonObject?: Skcer401ApplicationJson;
    skcer404ApplicationJsonObject?: Skcer404ApplicationJson;
    skcer500ApplicationJsonObject?: Skcer500ApplicationJson;
    skcer502ApplicationJsonObject?: Skcer502ApplicationJson;
    skcer503ApplicationJsonObject?: Skcer503ApplicationJson;
    skcer504ApplicationJsonObject?: Skcer504ApplicationJson;
}
