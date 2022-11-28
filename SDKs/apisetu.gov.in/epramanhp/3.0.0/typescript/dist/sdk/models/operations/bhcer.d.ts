import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BhcerRequestBodyCertificateParameters extends SpeakeasyBase {
    name: string;
    refNo: string;
}
export declare enum BhcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class BhcerRequestBody extends SpeakeasyBase {
    certificateParameters?: BhcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: BhcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class BhcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Bhcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Bhcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Bhcer400ApplicationJson extends SpeakeasyBase {
    error?: Bhcer400ApplicationJsonErrorEnum;
    errorDescription?: Bhcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bhcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Bhcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Bhcer401ApplicationJson extends SpeakeasyBase {
    error?: Bhcer401ApplicationJsonErrorEnum;
    errorDescription?: Bhcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bhcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Bhcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Bhcer404ApplicationJson extends SpeakeasyBase {
    error?: Bhcer404ApplicationJsonErrorEnum;
    errorDescription?: Bhcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bhcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Bhcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Bhcer500ApplicationJson extends SpeakeasyBase {
    error?: Bhcer500ApplicationJsonErrorEnum;
    errorDescription?: Bhcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bhcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Bhcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Bhcer502ApplicationJson extends SpeakeasyBase {
    error?: Bhcer502ApplicationJsonErrorEnum;
    errorDescription?: Bhcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bhcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Bhcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Bhcer503ApplicationJson extends SpeakeasyBase {
    error?: Bhcer503ApplicationJsonErrorEnum;
    errorDescription?: Bhcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bhcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Bhcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Bhcer504ApplicationJson extends SpeakeasyBase {
    error?: Bhcer504ApplicationJsonErrorEnum;
    errorDescription?: Bhcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class BhcerRequest extends SpeakeasyBase {
    request?: BhcerRequestBody;
    security: BhcerSecurity;
}
export declare class BhcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bhcer400ApplicationJsonObject?: Bhcer400ApplicationJson;
    bhcer401ApplicationJsonObject?: Bhcer401ApplicationJson;
    bhcer404ApplicationJsonObject?: Bhcer404ApplicationJson;
    bhcer500ApplicationJsonObject?: Bhcer500ApplicationJson;
    bhcer502ApplicationJsonObject?: Bhcer502ApplicationJson;
    bhcer503ApplicationJsonObject?: Bhcer503ApplicationJson;
    bhcer504ApplicationJsonObject?: Bhcer504ApplicationJson;
}
