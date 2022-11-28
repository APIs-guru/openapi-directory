import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NrcerRequestBodyCertificateParameters extends SpeakeasyBase {
    aplno: string;
    certno: string;
    sccd: string;
}
export declare enum NrcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class NrcerRequestBody extends SpeakeasyBase {
    certificateParameters?: NrcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: NrcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class NrcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Nrcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Nrcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Nrcer400ApplicationJson extends SpeakeasyBase {
    error?: Nrcer400ApplicationJsonErrorEnum;
    errorDescription?: Nrcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nrcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Nrcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Nrcer401ApplicationJson extends SpeakeasyBase {
    error?: Nrcer401ApplicationJsonErrorEnum;
    errorDescription?: Nrcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nrcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Nrcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Nrcer404ApplicationJson extends SpeakeasyBase {
    error?: Nrcer404ApplicationJsonErrorEnum;
    errorDescription?: Nrcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nrcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Nrcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Nrcer500ApplicationJson extends SpeakeasyBase {
    error?: Nrcer500ApplicationJsonErrorEnum;
    errorDescription?: Nrcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nrcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Nrcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Nrcer502ApplicationJson extends SpeakeasyBase {
    error?: Nrcer502ApplicationJsonErrorEnum;
    errorDescription?: Nrcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nrcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Nrcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Nrcer503ApplicationJson extends SpeakeasyBase {
    error?: Nrcer503ApplicationJsonErrorEnum;
    errorDescription?: Nrcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nrcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Nrcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Nrcer504ApplicationJson extends SpeakeasyBase {
    error?: Nrcer504ApplicationJsonErrorEnum;
    errorDescription?: Nrcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class NrcerRequest extends SpeakeasyBase {
    request?: NrcerRequestBody;
    security: NrcerSecurity;
}
export declare class NrcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    nrcer400ApplicationJsonObject?: Nrcer400ApplicationJson;
    nrcer401ApplicationJsonObject?: Nrcer401ApplicationJson;
    nrcer404ApplicationJsonObject?: Nrcer404ApplicationJson;
    nrcer500ApplicationJsonObject?: Nrcer500ApplicationJson;
    nrcer502ApplicationJsonObject?: Nrcer502ApplicationJson;
    nrcer503ApplicationJsonObject?: Nrcer503ApplicationJson;
    nrcer504ApplicationJsonObject?: Nrcer504ApplicationJson;
}
