import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LhcerRequestBodyCertificateParameters extends SpeakeasyBase {
    name: string;
    refNo: string;
}
export declare enum LhcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class LhcerRequestBody extends SpeakeasyBase {
    certificateParameters?: LhcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: LhcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class LhcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class LhcerRequest extends SpeakeasyBase {
    request?: LhcerRequestBody;
    security: LhcerSecurity;
}
export declare enum Lhcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Lhcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Lhcer400ApplicationJson extends SpeakeasyBase {
    error?: Lhcer400ApplicationJsonErrorEnum;
    errorDescription?: Lhcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lhcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Lhcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Lhcer401ApplicationJson extends SpeakeasyBase {
    error?: Lhcer401ApplicationJsonErrorEnum;
    errorDescription?: Lhcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lhcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Lhcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Lhcer404ApplicationJson extends SpeakeasyBase {
    error?: Lhcer404ApplicationJsonErrorEnum;
    errorDescription?: Lhcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lhcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Lhcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Lhcer500ApplicationJson extends SpeakeasyBase {
    error?: Lhcer500ApplicationJsonErrorEnum;
    errorDescription?: Lhcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lhcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Lhcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Lhcer502ApplicationJson extends SpeakeasyBase {
    error?: Lhcer502ApplicationJsonErrorEnum;
    errorDescription?: Lhcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lhcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Lhcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Lhcer503ApplicationJson extends SpeakeasyBase {
    error?: Lhcer503ApplicationJsonErrorEnum;
    errorDescription?: Lhcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lhcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Lhcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Lhcer504ApplicationJson extends SpeakeasyBase {
    error?: Lhcer504ApplicationJsonErrorEnum;
    errorDescription?: Lhcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class LhcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    lhcer400ApplicationJsonObject?: Lhcer400ApplicationJson;
    lhcer401ApplicationJsonObject?: Lhcer401ApplicationJson;
    lhcer404ApplicationJsonObject?: Lhcer404ApplicationJson;
    lhcer500ApplicationJsonObject?: Lhcer500ApplicationJson;
    lhcer502ApplicationJsonObject?: Lhcer502ApplicationJson;
    lhcer503ApplicationJsonObject?: Lhcer503ApplicationJson;
    lhcer504ApplicationJsonObject?: Lhcer504ApplicationJson;
}
