import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MbcerRequestBodyCertificateParameters extends SpeakeasyBase {
    certType: string;
    fullName: string;
    membershipNo: string;
}
export declare enum MbcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class MbcerRequestBody extends SpeakeasyBase {
    certificateParameters?: MbcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: MbcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class MbcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class MbcerRequest extends SpeakeasyBase {
    request?: MbcerRequestBody;
    security: MbcerSecurity;
}
export declare enum Mbcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Mbcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Mbcer400ApplicationJson extends SpeakeasyBase {
    error?: Mbcer400ApplicationJsonErrorEnum;
    errorDescription?: Mbcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mbcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Mbcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Mbcer401ApplicationJson extends SpeakeasyBase {
    error?: Mbcer401ApplicationJsonErrorEnum;
    errorDescription?: Mbcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mbcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Mbcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Mbcer404ApplicationJson extends SpeakeasyBase {
    error?: Mbcer404ApplicationJsonErrorEnum;
    errorDescription?: Mbcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mbcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Mbcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Mbcer500ApplicationJson extends SpeakeasyBase {
    error?: Mbcer500ApplicationJsonErrorEnum;
    errorDescription?: Mbcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mbcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Mbcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Mbcer502ApplicationJson extends SpeakeasyBase {
    error?: Mbcer502ApplicationJsonErrorEnum;
    errorDescription?: Mbcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mbcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Mbcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Mbcer503ApplicationJson extends SpeakeasyBase {
    error?: Mbcer503ApplicationJsonErrorEnum;
    errorDescription?: Mbcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mbcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Mbcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Mbcer504ApplicationJson extends SpeakeasyBase {
    error?: Mbcer504ApplicationJsonErrorEnum;
    errorDescription?: Mbcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class MbcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mbcer400ApplicationJsonObject?: Mbcer400ApplicationJson;
    mbcer401ApplicationJsonObject?: Mbcer401ApplicationJson;
    mbcer404ApplicationJsonObject?: Mbcer404ApplicationJson;
    mbcer500ApplicationJsonObject?: Mbcer500ApplicationJson;
    mbcer502ApplicationJsonObject?: Mbcer502ApplicationJson;
    mbcer503ApplicationJsonObject?: Mbcer503ApplicationJson;
    mbcer504ApplicationJsonObject?: Mbcer504ApplicationJson;
}
