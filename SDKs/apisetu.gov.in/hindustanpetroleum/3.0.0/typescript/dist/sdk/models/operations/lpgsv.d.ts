import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LpgsvRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    gender: string;
    lpgId: string;
    svNo: string;
    uid: string;
}
export declare enum LpgsvRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class LpgsvRequestBody extends SpeakeasyBase {
    certificateParameters?: LpgsvRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: LpgsvRequestBodyFormatEnum;
    txnId: string;
}
export declare class LpgsvSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class LpgsvRequest extends SpeakeasyBase {
    request?: LpgsvRequestBody;
    security: LpgsvSecurity;
}
export declare enum Lpgsv400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Lpgsv400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Lpgsv400ApplicationJson extends SpeakeasyBase {
    error?: Lpgsv400ApplicationJsonErrorEnum;
    errorDescription?: Lpgsv400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lpgsv401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Lpgsv401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Lpgsv401ApplicationJson extends SpeakeasyBase {
    error?: Lpgsv401ApplicationJsonErrorEnum;
    errorDescription?: Lpgsv401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lpgsv404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Lpgsv404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Lpgsv404ApplicationJson extends SpeakeasyBase {
    error?: Lpgsv404ApplicationJsonErrorEnum;
    errorDescription?: Lpgsv404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lpgsv500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Lpgsv500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Lpgsv500ApplicationJson extends SpeakeasyBase {
    error?: Lpgsv500ApplicationJsonErrorEnum;
    errorDescription?: Lpgsv500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lpgsv502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Lpgsv502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Lpgsv502ApplicationJson extends SpeakeasyBase {
    error?: Lpgsv502ApplicationJsonErrorEnum;
    errorDescription?: Lpgsv502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lpgsv503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Lpgsv503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Lpgsv503ApplicationJson extends SpeakeasyBase {
    error?: Lpgsv503ApplicationJsonErrorEnum;
    errorDescription?: Lpgsv503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lpgsv504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Lpgsv504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Lpgsv504ApplicationJson extends SpeakeasyBase {
    error?: Lpgsv504ApplicationJsonErrorEnum;
    errorDescription?: Lpgsv504ApplicationJsonErrorDescriptionEnum;
}
export declare class LpgsvResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    lpgsv400ApplicationJsonObject?: Lpgsv400ApplicationJson;
    lpgsv401ApplicationJsonObject?: Lpgsv401ApplicationJson;
    lpgsv404ApplicationJsonObject?: Lpgsv404ApplicationJson;
    lpgsv500ApplicationJsonObject?: Lpgsv500ApplicationJson;
    lpgsv502ApplicationJsonObject?: Lpgsv502ApplicationJson;
    lpgsv503ApplicationJsonObject?: Lpgsv503ApplicationJson;
    lpgsv504ApplicationJsonObject?: Lpgsv504ApplicationJson;
}
