import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PscerRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    regNum: string;
    uid: string;
}
export declare enum PscerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class PscerRequestBody extends SpeakeasyBase {
    certificateParameters?: PscerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: PscerRequestBodyFormatEnum;
    txnId: string;
}
export declare class PscerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Pscer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Pscer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Pscer400ApplicationJson extends SpeakeasyBase {
    error?: Pscer400ApplicationJsonErrorEnum;
    errorDescription?: Pscer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pscer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Pscer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Pscer401ApplicationJson extends SpeakeasyBase {
    error?: Pscer401ApplicationJsonErrorEnum;
    errorDescription?: Pscer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pscer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Pscer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Pscer404ApplicationJson extends SpeakeasyBase {
    error?: Pscer404ApplicationJsonErrorEnum;
    errorDescription?: Pscer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pscer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Pscer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Pscer500ApplicationJson extends SpeakeasyBase {
    error?: Pscer500ApplicationJsonErrorEnum;
    errorDescription?: Pscer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pscer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Pscer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Pscer502ApplicationJson extends SpeakeasyBase {
    error?: Pscer502ApplicationJsonErrorEnum;
    errorDescription?: Pscer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pscer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Pscer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Pscer503ApplicationJson extends SpeakeasyBase {
    error?: Pscer503ApplicationJsonErrorEnum;
    errorDescription?: Pscer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pscer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Pscer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Pscer504ApplicationJson extends SpeakeasyBase {
    error?: Pscer504ApplicationJsonErrorEnum;
    errorDescription?: Pscer504ApplicationJsonErrorDescriptionEnum;
}
export declare class PscerRequest extends SpeakeasyBase {
    request?: PscerRequestBody;
    security: PscerSecurity;
}
export declare class PscerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pscer400ApplicationJsonObject?: Pscer400ApplicationJson;
    pscer401ApplicationJsonObject?: Pscer401ApplicationJson;
    pscer404ApplicationJsonObject?: Pscer404ApplicationJson;
    pscer500ApplicationJsonObject?: Pscer500ApplicationJson;
    pscer502ApplicationJsonObject?: Pscer502ApplicationJson;
    pscer503ApplicationJsonObject?: Pscer503ApplicationJson;
    pscer504ApplicationJsonObject?: Pscer504ApplicationJson;
}
