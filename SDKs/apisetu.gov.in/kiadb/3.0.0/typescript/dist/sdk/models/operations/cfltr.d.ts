import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CfltrRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    regNum: string;
    uid: string;
}
export declare enum CfltrRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class CfltrRequestBody extends SpeakeasyBase {
    certificateParameters?: CfltrRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: CfltrRequestBodyFormatEnum;
    txnId: string;
}
export declare class CfltrSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Cfltr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cfltr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Cfltr400ApplicationJson extends SpeakeasyBase {
    error?: Cfltr400ApplicationJsonErrorEnum;
    errorDescription?: Cfltr400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cfltr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cfltr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Cfltr401ApplicationJson extends SpeakeasyBase {
    error?: Cfltr401ApplicationJsonErrorEnum;
    errorDescription?: Cfltr401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cfltr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cfltr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Cfltr404ApplicationJson extends SpeakeasyBase {
    error?: Cfltr404ApplicationJsonErrorEnum;
    errorDescription?: Cfltr404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cfltr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cfltr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Cfltr500ApplicationJson extends SpeakeasyBase {
    error?: Cfltr500ApplicationJsonErrorEnum;
    errorDescription?: Cfltr500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cfltr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cfltr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Cfltr502ApplicationJson extends SpeakeasyBase {
    error?: Cfltr502ApplicationJsonErrorEnum;
    errorDescription?: Cfltr502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cfltr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cfltr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Cfltr503ApplicationJson extends SpeakeasyBase {
    error?: Cfltr503ApplicationJsonErrorEnum;
    errorDescription?: Cfltr503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cfltr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cfltr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Cfltr504ApplicationJson extends SpeakeasyBase {
    error?: Cfltr504ApplicationJsonErrorEnum;
    errorDescription?: Cfltr504ApplicationJsonErrorDescriptionEnum;
}
export declare class CfltrRequest extends SpeakeasyBase {
    request?: CfltrRequestBody;
    security: CfltrSecurity;
}
export declare class CfltrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cfltr400ApplicationJsonObject?: Cfltr400ApplicationJson;
    cfltr401ApplicationJsonObject?: Cfltr401ApplicationJson;
    cfltr404ApplicationJsonObject?: Cfltr404ApplicationJson;
    cfltr500ApplicationJsonObject?: Cfltr500ApplicationJson;
    cfltr502ApplicationJsonObject?: Cfltr502ApplicationJson;
    cfltr503ApplicationJsonObject?: Cfltr503ApplicationJson;
    cfltr504ApplicationJsonObject?: Cfltr504ApplicationJson;
}
