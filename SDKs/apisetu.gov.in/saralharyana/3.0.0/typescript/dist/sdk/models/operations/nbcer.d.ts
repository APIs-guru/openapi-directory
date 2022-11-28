import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NbcerRequestBodyCertificateParameters extends SpeakeasyBase {
    refNo: string;
    tokenNo: string;
}
export declare enum NbcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class NbcerRequestBody extends SpeakeasyBase {
    certificateParameters?: NbcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: NbcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class NbcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Nbcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Nbcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Nbcer400ApplicationJson extends SpeakeasyBase {
    error?: Nbcer400ApplicationJsonErrorEnum;
    errorDescription?: Nbcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nbcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Nbcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Nbcer401ApplicationJson extends SpeakeasyBase {
    error?: Nbcer401ApplicationJsonErrorEnum;
    errorDescription?: Nbcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nbcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Nbcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Nbcer404ApplicationJson extends SpeakeasyBase {
    error?: Nbcer404ApplicationJsonErrorEnum;
    errorDescription?: Nbcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nbcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Nbcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Nbcer500ApplicationJson extends SpeakeasyBase {
    error?: Nbcer500ApplicationJsonErrorEnum;
    errorDescription?: Nbcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nbcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Nbcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Nbcer502ApplicationJson extends SpeakeasyBase {
    error?: Nbcer502ApplicationJsonErrorEnum;
    errorDescription?: Nbcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nbcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Nbcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Nbcer503ApplicationJson extends SpeakeasyBase {
    error?: Nbcer503ApplicationJsonErrorEnum;
    errorDescription?: Nbcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nbcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Nbcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Nbcer504ApplicationJson extends SpeakeasyBase {
    error?: Nbcer504ApplicationJsonErrorEnum;
    errorDescription?: Nbcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class NbcerRequest extends SpeakeasyBase {
    request?: NbcerRequestBody;
    security: NbcerSecurity;
}
export declare class NbcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    nbcer400ApplicationJsonObject?: Nbcer400ApplicationJson;
    nbcer401ApplicationJsonObject?: Nbcer401ApplicationJson;
    nbcer404ApplicationJsonObject?: Nbcer404ApplicationJson;
    nbcer500ApplicationJsonObject?: Nbcer500ApplicationJson;
    nbcer502ApplicationJsonObject?: Nbcer502ApplicationJson;
    nbcer503ApplicationJsonObject?: Nbcer503ApplicationJson;
    nbcer504ApplicationJsonObject?: Nbcer504ApplicationJson;
}
