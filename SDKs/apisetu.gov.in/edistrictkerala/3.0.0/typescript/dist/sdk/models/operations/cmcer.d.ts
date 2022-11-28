import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CmcerRequestBodyCertificateParameters extends SpeakeasyBase {
    aplno: string;
    certno: string;
    sccd: string;
}
export declare enum CmcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class CmcerRequestBody extends SpeakeasyBase {
    certificateParameters?: CmcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: CmcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class CmcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Cmcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cmcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Cmcer400ApplicationJson extends SpeakeasyBase {
    error?: Cmcer400ApplicationJsonErrorEnum;
    errorDescription?: Cmcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cmcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cmcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Cmcer401ApplicationJson extends SpeakeasyBase {
    error?: Cmcer401ApplicationJsonErrorEnum;
    errorDescription?: Cmcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cmcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cmcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Cmcer404ApplicationJson extends SpeakeasyBase {
    error?: Cmcer404ApplicationJsonErrorEnum;
    errorDescription?: Cmcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cmcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cmcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Cmcer500ApplicationJson extends SpeakeasyBase {
    error?: Cmcer500ApplicationJsonErrorEnum;
    errorDescription?: Cmcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cmcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cmcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Cmcer502ApplicationJson extends SpeakeasyBase {
    error?: Cmcer502ApplicationJsonErrorEnum;
    errorDescription?: Cmcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cmcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cmcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Cmcer503ApplicationJson extends SpeakeasyBase {
    error?: Cmcer503ApplicationJsonErrorEnum;
    errorDescription?: Cmcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cmcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cmcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Cmcer504ApplicationJson extends SpeakeasyBase {
    error?: Cmcer504ApplicationJsonErrorEnum;
    errorDescription?: Cmcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class CmcerRequest extends SpeakeasyBase {
    request?: CmcerRequestBody;
    security: CmcerSecurity;
}
export declare class CmcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cmcer400ApplicationJsonObject?: Cmcer400ApplicationJson;
    cmcer401ApplicationJsonObject?: Cmcer401ApplicationJson;
    cmcer404ApplicationJsonObject?: Cmcer404ApplicationJson;
    cmcer500ApplicationJsonObject?: Cmcer500ApplicationJson;
    cmcer502ApplicationJsonObject?: Cmcer502ApplicationJson;
    cmcer503ApplicationJsonObject?: Cmcer503ApplicationJson;
    cmcer504ApplicationJsonObject?: Cmcer504ApplicationJson;
}
