import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CocerRequestBodyCertificateParameters extends SpeakeasyBase {
    certType: string;
    companyName: string;
    regNo: string;
    sector: string;
}
export declare enum CocerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class CocerRequestBody extends SpeakeasyBase {
    certificateParameters?: CocerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: CocerRequestBodyFormatEnum;
    txnId: string;
}
export declare class CocerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class CocerRequest extends SpeakeasyBase {
    request?: CocerRequestBody;
    security: CocerSecurity;
}
export declare enum Cocer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cocer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Cocer400ApplicationJson extends SpeakeasyBase {
    error?: Cocer400ApplicationJsonErrorEnum;
    errorDescription?: Cocer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cocer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cocer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Cocer401ApplicationJson extends SpeakeasyBase {
    error?: Cocer401ApplicationJsonErrorEnum;
    errorDescription?: Cocer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cocer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cocer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Cocer404ApplicationJson extends SpeakeasyBase {
    error?: Cocer404ApplicationJsonErrorEnum;
    errorDescription?: Cocer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cocer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cocer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Cocer500ApplicationJson extends SpeakeasyBase {
    error?: Cocer500ApplicationJsonErrorEnum;
    errorDescription?: Cocer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cocer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cocer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Cocer502ApplicationJson extends SpeakeasyBase {
    error?: Cocer502ApplicationJsonErrorEnum;
    errorDescription?: Cocer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cocer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cocer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Cocer503ApplicationJson extends SpeakeasyBase {
    error?: Cocer503ApplicationJsonErrorEnum;
    errorDescription?: Cocer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cocer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cocer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Cocer504ApplicationJson extends SpeakeasyBase {
    error?: Cocer504ApplicationJsonErrorEnum;
    errorDescription?: Cocer504ApplicationJsonErrorDescriptionEnum;
}
export declare class CocerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cocer400ApplicationJsonObject?: Cocer400ApplicationJson;
    cocer401ApplicationJsonObject?: Cocer401ApplicationJson;
    cocer404ApplicationJsonObject?: Cocer404ApplicationJson;
    cocer500ApplicationJsonObject?: Cocer500ApplicationJson;
    cocer502ApplicationJsonObject?: Cocer502ApplicationJson;
    cocer503ApplicationJsonObject?: Cocer503ApplicationJson;
    cocer504ApplicationJsonObject?: Cocer504ApplicationJson;
}
