import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MicerRequestBodyCertificateParameters extends SpeakeasyBase {
    appno: string;
    dateOfBirth: string;
    enrolno: string;
    rollno: string;
}
export declare enum MicerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class MicerRequestBody extends SpeakeasyBase {
    certificateParameters?: MicerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: MicerRequestBodyFormatEnum;
    txnId: string;
}
export declare class MicerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class MicerRequest extends SpeakeasyBase {
    request?: MicerRequestBody;
    security: MicerSecurity;
}
export declare enum Micer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Micer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Micer400ApplicationJson extends SpeakeasyBase {
    error?: Micer400ApplicationJsonErrorEnum;
    errorDescription?: Micer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Micer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Micer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Micer401ApplicationJson extends SpeakeasyBase {
    error?: Micer401ApplicationJsonErrorEnum;
    errorDescription?: Micer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Micer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Micer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Micer404ApplicationJson extends SpeakeasyBase {
    error?: Micer404ApplicationJsonErrorEnum;
    errorDescription?: Micer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Micer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Micer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Micer500ApplicationJson extends SpeakeasyBase {
    error?: Micer500ApplicationJsonErrorEnum;
    errorDescription?: Micer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Micer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Micer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Micer502ApplicationJson extends SpeakeasyBase {
    error?: Micer502ApplicationJsonErrorEnum;
    errorDescription?: Micer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Micer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Micer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Micer503ApplicationJson extends SpeakeasyBase {
    error?: Micer503ApplicationJsonErrorEnum;
    errorDescription?: Micer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Micer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Micer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Micer504ApplicationJson extends SpeakeasyBase {
    error?: Micer504ApplicationJsonErrorEnum;
    errorDescription?: Micer504ApplicationJsonErrorDescriptionEnum;
}
export declare class MicerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    micer400ApplicationJsonObject?: Micer400ApplicationJson;
    micer401ApplicationJsonObject?: Micer401ApplicationJson;
    micer404ApplicationJsonObject?: Micer404ApplicationJson;
    micer500ApplicationJsonObject?: Micer500ApplicationJson;
    micer502ApplicationJsonObject?: Micer502ApplicationJson;
    micer503ApplicationJsonObject?: Micer503ApplicationJson;
    micer504ApplicationJsonObject?: Micer504ApplicationJson;
}
