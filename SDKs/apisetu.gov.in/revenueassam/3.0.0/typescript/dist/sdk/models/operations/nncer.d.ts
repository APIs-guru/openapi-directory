import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NncerRequestBodyCertificateParameters extends SpeakeasyBase {
    refNo: string;
}
export declare enum NncerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class NncerRequestBody extends SpeakeasyBase {
    certificateParameters?: NncerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: NncerRequestBodyFormatEnum;
    txnId: string;
}
export declare class NncerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class NncerRequest extends SpeakeasyBase {
    request?: NncerRequestBody;
    security: NncerSecurity;
}
export declare enum Nncer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Nncer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Nncer400ApplicationJson extends SpeakeasyBase {
    error?: Nncer400ApplicationJsonErrorEnum;
    errorDescription?: Nncer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nncer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Nncer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Nncer401ApplicationJson extends SpeakeasyBase {
    error?: Nncer401ApplicationJsonErrorEnum;
    errorDescription?: Nncer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nncer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Nncer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Nncer404ApplicationJson extends SpeakeasyBase {
    error?: Nncer404ApplicationJsonErrorEnum;
    errorDescription?: Nncer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nncer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Nncer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Nncer500ApplicationJson extends SpeakeasyBase {
    error?: Nncer500ApplicationJsonErrorEnum;
    errorDescription?: Nncer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nncer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Nncer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Nncer502ApplicationJson extends SpeakeasyBase {
    error?: Nncer502ApplicationJsonErrorEnum;
    errorDescription?: Nncer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nncer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Nncer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Nncer503ApplicationJson extends SpeakeasyBase {
    error?: Nncer503ApplicationJsonErrorEnum;
    errorDescription?: Nncer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nncer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Nncer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Nncer504ApplicationJson extends SpeakeasyBase {
    error?: Nncer504ApplicationJsonErrorEnum;
    errorDescription?: Nncer504ApplicationJsonErrorDescriptionEnum;
}
export declare class NncerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    nncer400ApplicationJsonObject?: Nncer400ApplicationJson;
    nncer401ApplicationJsonObject?: Nncer401ApplicationJson;
    nncer404ApplicationJsonObject?: Nncer404ApplicationJson;
    nncer500ApplicationJsonObject?: Nncer500ApplicationJson;
    nncer502ApplicationJsonObject?: Nncer502ApplicationJson;
    nncer503ApplicationJsonObject?: Nncer503ApplicationJson;
    nncer504ApplicationJsonObject?: Nncer504ApplicationJson;
}
