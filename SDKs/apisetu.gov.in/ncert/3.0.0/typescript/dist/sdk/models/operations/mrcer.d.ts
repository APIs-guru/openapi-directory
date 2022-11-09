import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MrcerRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    rroll: string;
    year: string;
}
export declare enum MrcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class MrcerRequestBody extends SpeakeasyBase {
    certificateParameters?: MrcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: MrcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class MrcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class MrcerRequest extends SpeakeasyBase {
    request?: MrcerRequestBody;
    security: MrcerSecurity;
}
export declare enum Mrcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Mrcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Mrcer400ApplicationJson extends SpeakeasyBase {
    error?: Mrcer400ApplicationJsonErrorEnum;
    errorDescription?: Mrcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mrcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Mrcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Mrcer401ApplicationJson extends SpeakeasyBase {
    error?: Mrcer401ApplicationJsonErrorEnum;
    errorDescription?: Mrcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mrcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Mrcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Mrcer404ApplicationJson extends SpeakeasyBase {
    error?: Mrcer404ApplicationJsonErrorEnum;
    errorDescription?: Mrcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mrcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Mrcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Mrcer500ApplicationJson extends SpeakeasyBase {
    error?: Mrcer500ApplicationJsonErrorEnum;
    errorDescription?: Mrcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mrcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Mrcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Mrcer502ApplicationJson extends SpeakeasyBase {
    error?: Mrcer502ApplicationJsonErrorEnum;
    errorDescription?: Mrcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mrcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Mrcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Mrcer503ApplicationJson extends SpeakeasyBase {
    error?: Mrcer503ApplicationJsonErrorEnum;
    errorDescription?: Mrcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mrcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Mrcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Mrcer504ApplicationJson extends SpeakeasyBase {
    error?: Mrcer504ApplicationJsonErrorEnum;
    errorDescription?: Mrcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class MrcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mrcer400ApplicationJsonObject?: Mrcer400ApplicationJson;
    mrcer401ApplicationJsonObject?: Mrcer401ApplicationJson;
    mrcer404ApplicationJsonObject?: Mrcer404ApplicationJson;
    mrcer500ApplicationJsonObject?: Mrcer500ApplicationJson;
    mrcer502ApplicationJsonObject?: Mrcer502ApplicationJson;
    mrcer503ApplicationJsonObject?: Mrcer503ApplicationJson;
    mrcer504ApplicationJsonObject?: Mrcer504ApplicationJson;
}
