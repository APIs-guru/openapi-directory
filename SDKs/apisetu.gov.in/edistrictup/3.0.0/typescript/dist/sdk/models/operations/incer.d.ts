import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IncerRequestBodyCertificateParameters extends SpeakeasyBase {
    applicationNo: string;
    certificateId: string;
}
export declare enum IncerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class IncerRequestBody extends SpeakeasyBase {
    certificateParameters?: IncerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: IncerRequestBodyFormatEnum;
    txnId: string;
}
export declare class IncerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Incer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Incer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Incer400ApplicationJson extends SpeakeasyBase {
    error?: Incer400ApplicationJsonErrorEnum;
    errorDescription?: Incer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Incer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Incer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Incer401ApplicationJson extends SpeakeasyBase {
    error?: Incer401ApplicationJsonErrorEnum;
    errorDescription?: Incer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Incer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Incer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Incer404ApplicationJson extends SpeakeasyBase {
    error?: Incer404ApplicationJsonErrorEnum;
    errorDescription?: Incer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Incer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Incer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Incer500ApplicationJson extends SpeakeasyBase {
    error?: Incer500ApplicationJsonErrorEnum;
    errorDescription?: Incer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Incer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Incer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Incer502ApplicationJson extends SpeakeasyBase {
    error?: Incer502ApplicationJsonErrorEnum;
    errorDescription?: Incer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Incer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Incer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Incer503ApplicationJson extends SpeakeasyBase {
    error?: Incer503ApplicationJsonErrorEnum;
    errorDescription?: Incer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Incer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Incer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Incer504ApplicationJson extends SpeakeasyBase {
    error?: Incer504ApplicationJsonErrorEnum;
    errorDescription?: Incer504ApplicationJsonErrorDescriptionEnum;
}
export declare class IncerRequest extends SpeakeasyBase {
    request?: IncerRequestBody;
    security: IncerSecurity;
}
export declare class IncerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    incer400ApplicationJsonObject?: Incer400ApplicationJson;
    incer401ApplicationJsonObject?: Incer401ApplicationJson;
    incer404ApplicationJsonObject?: Incer404ApplicationJson;
    incer500ApplicationJsonObject?: Incer500ApplicationJson;
    incer502ApplicationJsonObject?: Incer502ApplicationJson;
    incer503ApplicationJsonObject?: Incer503ApplicationJson;
    incer504ApplicationJsonObject?: Incer504ApplicationJson;
}
