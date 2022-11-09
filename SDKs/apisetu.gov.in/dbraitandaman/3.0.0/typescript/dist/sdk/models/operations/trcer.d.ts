import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TrcerRequestBodyCertificateParameters extends SpeakeasyBase {
    certNo: string;
    dob: string;
    fullName: string;
    session: string;
}
export declare enum TrcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class TrcerRequestBody extends SpeakeasyBase {
    certificateParameters?: TrcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: TrcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class TrcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class TrcerRequest extends SpeakeasyBase {
    request?: TrcerRequestBody;
    security: TrcerSecurity;
}
export declare enum Trcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Trcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Trcer400ApplicationJson extends SpeakeasyBase {
    error?: Trcer400ApplicationJsonErrorEnum;
    errorDescription?: Trcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Trcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Trcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Trcer401ApplicationJson extends SpeakeasyBase {
    error?: Trcer401ApplicationJsonErrorEnum;
    errorDescription?: Trcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Trcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Trcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Trcer404ApplicationJson extends SpeakeasyBase {
    error?: Trcer404ApplicationJsonErrorEnum;
    errorDescription?: Trcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Trcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Trcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Trcer500ApplicationJson extends SpeakeasyBase {
    error?: Trcer500ApplicationJsonErrorEnum;
    errorDescription?: Trcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Trcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Trcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Trcer502ApplicationJson extends SpeakeasyBase {
    error?: Trcer502ApplicationJsonErrorEnum;
    errorDescription?: Trcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Trcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Trcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Trcer503ApplicationJson extends SpeakeasyBase {
    error?: Trcer503ApplicationJsonErrorEnum;
    errorDescription?: Trcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Trcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Trcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Trcer504ApplicationJson extends SpeakeasyBase {
    error?: Trcer504ApplicationJsonErrorEnum;
    errorDescription?: Trcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class TrcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trcer400ApplicationJsonObject?: Trcer400ApplicationJson;
    trcer401ApplicationJsonObject?: Trcer401ApplicationJson;
    trcer404ApplicationJsonObject?: Trcer404ApplicationJson;
    trcer500ApplicationJsonObject?: Trcer500ApplicationJson;
    trcer502ApplicationJsonObject?: Trcer502ApplicationJson;
    trcer503ApplicationJsonObject?: Trcer503ApplicationJson;
    trcer504ApplicationJsonObject?: Trcer504ApplicationJson;
}
