import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BknocRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    regNum: string;
    uid: string;
}
export declare enum BknocRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class BknocRequestBody extends SpeakeasyBase {
    certificateParameters?: BknocRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: BknocRequestBodyFormatEnum;
    txnId: string;
}
export declare class BknocSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class BknocRequest extends SpeakeasyBase {
    request?: BknocRequestBody;
    security: BknocSecurity;
}
export declare enum Bknoc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Bknoc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Bknoc400ApplicationJson extends SpeakeasyBase {
    error?: Bknoc400ApplicationJsonErrorEnum;
    errorDescription?: Bknoc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bknoc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Bknoc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Bknoc401ApplicationJson extends SpeakeasyBase {
    error?: Bknoc401ApplicationJsonErrorEnum;
    errorDescription?: Bknoc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bknoc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Bknoc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Bknoc404ApplicationJson extends SpeakeasyBase {
    error?: Bknoc404ApplicationJsonErrorEnum;
    errorDescription?: Bknoc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bknoc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Bknoc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Bknoc500ApplicationJson extends SpeakeasyBase {
    error?: Bknoc500ApplicationJsonErrorEnum;
    errorDescription?: Bknoc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bknoc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Bknoc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Bknoc502ApplicationJson extends SpeakeasyBase {
    error?: Bknoc502ApplicationJsonErrorEnum;
    errorDescription?: Bknoc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bknoc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Bknoc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Bknoc503ApplicationJson extends SpeakeasyBase {
    error?: Bknoc503ApplicationJsonErrorEnum;
    errorDescription?: Bknoc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bknoc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Bknoc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Bknoc504ApplicationJson extends SpeakeasyBase {
    error?: Bknoc504ApplicationJsonErrorEnum;
    errorDescription?: Bknoc504ApplicationJsonErrorDescriptionEnum;
}
export declare class BknocResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bknoc400ApplicationJsonObject?: Bknoc400ApplicationJson;
    bknoc401ApplicationJsonObject?: Bknoc401ApplicationJson;
    bknoc404ApplicationJsonObject?: Bknoc404ApplicationJson;
    bknoc500ApplicationJsonObject?: Bknoc500ApplicationJson;
    bknoc502ApplicationJsonObject?: Bknoc502ApplicationJson;
    bknoc503ApplicationJsonObject?: Bknoc503ApplicationJson;
    bknoc504ApplicationJsonObject?: Bknoc504ApplicationJson;
}
