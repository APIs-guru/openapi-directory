import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PhcerRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    registrationNo: string;
}
export declare enum PhcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class PhcerRequestBody extends SpeakeasyBase {
    certificateParameters?: PhcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: PhcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class PhcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class PhcerRequest extends SpeakeasyBase {
    request?: PhcerRequestBody;
    security: PhcerSecurity;
}
export declare enum Phcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Phcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Phcer400ApplicationJson extends SpeakeasyBase {
    error?: Phcer400ApplicationJsonErrorEnum;
    errorDescription?: Phcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Phcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Phcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Phcer401ApplicationJson extends SpeakeasyBase {
    error?: Phcer401ApplicationJsonErrorEnum;
    errorDescription?: Phcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Phcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Phcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Phcer404ApplicationJson extends SpeakeasyBase {
    error?: Phcer404ApplicationJsonErrorEnum;
    errorDescription?: Phcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Phcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Phcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Phcer500ApplicationJson extends SpeakeasyBase {
    error?: Phcer500ApplicationJsonErrorEnum;
    errorDescription?: Phcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Phcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Phcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Phcer502ApplicationJson extends SpeakeasyBase {
    error?: Phcer502ApplicationJsonErrorEnum;
    errorDescription?: Phcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Phcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Phcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Phcer503ApplicationJson extends SpeakeasyBase {
    error?: Phcer503ApplicationJsonErrorEnum;
    errorDescription?: Phcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Phcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Phcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Phcer504ApplicationJson extends SpeakeasyBase {
    error?: Phcer504ApplicationJsonErrorEnum;
    errorDescription?: Phcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class PhcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    phcer400ApplicationJsonObject?: Phcer400ApplicationJson;
    phcer401ApplicationJsonObject?: Phcer401ApplicationJson;
    phcer404ApplicationJsonObject?: Phcer404ApplicationJson;
    phcer500ApplicationJsonObject?: Phcer500ApplicationJson;
    phcer502ApplicationJsonObject?: Phcer502ApplicationJson;
    phcer503ApplicationJsonObject?: Phcer503ApplicationJson;
    phcer504ApplicationJsonObject?: Phcer504ApplicationJson;
}
