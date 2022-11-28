import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EgcerRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    refNo: string;
    tokenNo: string;
    uid: string;
}
export declare enum EgcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class EgcerRequestBody extends SpeakeasyBase {
    certificateParameters?: EgcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: EgcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class EgcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Egcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Egcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Egcer400ApplicationJson extends SpeakeasyBase {
    error?: Egcer400ApplicationJsonErrorEnum;
    errorDescription?: Egcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Egcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Egcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Egcer401ApplicationJson extends SpeakeasyBase {
    error?: Egcer401ApplicationJsonErrorEnum;
    errorDescription?: Egcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Egcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Egcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Egcer404ApplicationJson extends SpeakeasyBase {
    error?: Egcer404ApplicationJsonErrorEnum;
    errorDescription?: Egcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Egcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Egcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Egcer500ApplicationJson extends SpeakeasyBase {
    error?: Egcer500ApplicationJsonErrorEnum;
    errorDescription?: Egcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Egcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Egcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Egcer502ApplicationJson extends SpeakeasyBase {
    error?: Egcer502ApplicationJsonErrorEnum;
    errorDescription?: Egcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Egcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Egcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Egcer503ApplicationJson extends SpeakeasyBase {
    error?: Egcer503ApplicationJsonErrorEnum;
    errorDescription?: Egcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Egcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Egcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Egcer504ApplicationJson extends SpeakeasyBase {
    error?: Egcer504ApplicationJsonErrorEnum;
    errorDescription?: Egcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class EgcerRequest extends SpeakeasyBase {
    request?: EgcerRequestBody;
    security: EgcerSecurity;
}
export declare class EgcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    egcer400ApplicationJsonObject?: Egcer400ApplicationJson;
    egcer401ApplicationJsonObject?: Egcer401ApplicationJson;
    egcer404ApplicationJsonObject?: Egcer404ApplicationJson;
    egcer500ApplicationJsonObject?: Egcer500ApplicationJson;
    egcer502ApplicationJsonObject?: Egcer502ApplicationJson;
    egcer503ApplicationJsonObject?: Egcer503ApplicationJson;
    egcer504ApplicationJsonObject?: Egcer504ApplicationJson;
}
