import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AlltrRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    regNum: string;
    uid: string;
}
export declare enum AlltrRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class AlltrRequestBody extends SpeakeasyBase {
    certificateParameters?: AlltrRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: AlltrRequestBodyFormatEnum;
    txnId: string;
}
export declare class AlltrSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class AlltrRequest extends SpeakeasyBase {
    request?: AlltrRequestBody;
    security: AlltrSecurity;
}
export declare enum Alltr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Alltr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Alltr400ApplicationJson extends SpeakeasyBase {
    error?: Alltr400ApplicationJsonErrorEnum;
    errorDescription?: Alltr400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alltr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Alltr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Alltr401ApplicationJson extends SpeakeasyBase {
    error?: Alltr401ApplicationJsonErrorEnum;
    errorDescription?: Alltr401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alltr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Alltr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Alltr404ApplicationJson extends SpeakeasyBase {
    error?: Alltr404ApplicationJsonErrorEnum;
    errorDescription?: Alltr404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alltr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Alltr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Alltr500ApplicationJson extends SpeakeasyBase {
    error?: Alltr500ApplicationJsonErrorEnum;
    errorDescription?: Alltr500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alltr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Alltr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Alltr502ApplicationJson extends SpeakeasyBase {
    error?: Alltr502ApplicationJsonErrorEnum;
    errorDescription?: Alltr502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alltr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Alltr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Alltr503ApplicationJson extends SpeakeasyBase {
    error?: Alltr503ApplicationJsonErrorEnum;
    errorDescription?: Alltr503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alltr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Alltr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Alltr504ApplicationJson extends SpeakeasyBase {
    error?: Alltr504ApplicationJsonErrorEnum;
    errorDescription?: Alltr504ApplicationJsonErrorDescriptionEnum;
}
export declare class AlltrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    alltr400ApplicationJsonObject?: Alltr400ApplicationJson;
    alltr401ApplicationJsonObject?: Alltr401ApplicationJson;
    alltr404ApplicationJsonObject?: Alltr404ApplicationJson;
    alltr500ApplicationJsonObject?: Alltr500ApplicationJson;
    alltr502ApplicationJsonObject?: Alltr502ApplicationJson;
    alltr503ApplicationJsonObject?: Alltr503ApplicationJson;
    alltr504ApplicationJsonObject?: Alltr504ApplicationJson;
}
