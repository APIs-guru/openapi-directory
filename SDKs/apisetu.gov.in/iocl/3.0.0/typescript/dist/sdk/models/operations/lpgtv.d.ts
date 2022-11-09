import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LpgtvRequestBodyCertificateParameters extends SpeakeasyBase {
    uid: string;
}
export declare enum LpgtvRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class LpgtvRequestBody extends SpeakeasyBase {
    certificateParameters?: LpgtvRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: LpgtvRequestBodyFormatEnum;
    txnId: string;
}
export declare class LpgtvSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class LpgtvRequest extends SpeakeasyBase {
    request?: LpgtvRequestBody;
    security: LpgtvSecurity;
}
export declare enum Lpgtv400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Lpgtv400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Lpgtv400ApplicationJson extends SpeakeasyBase {
    error?: Lpgtv400ApplicationJsonErrorEnum;
    errorDescription?: Lpgtv400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lpgtv401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Lpgtv401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Lpgtv401ApplicationJson extends SpeakeasyBase {
    error?: Lpgtv401ApplicationJsonErrorEnum;
    errorDescription?: Lpgtv401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lpgtv404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Lpgtv404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Lpgtv404ApplicationJson extends SpeakeasyBase {
    error?: Lpgtv404ApplicationJsonErrorEnum;
    errorDescription?: Lpgtv404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lpgtv500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Lpgtv500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Lpgtv500ApplicationJson extends SpeakeasyBase {
    error?: Lpgtv500ApplicationJsonErrorEnum;
    errorDescription?: Lpgtv500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lpgtv502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Lpgtv502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Lpgtv502ApplicationJson extends SpeakeasyBase {
    error?: Lpgtv502ApplicationJsonErrorEnum;
    errorDescription?: Lpgtv502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lpgtv503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Lpgtv503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Lpgtv503ApplicationJson extends SpeakeasyBase {
    error?: Lpgtv503ApplicationJsonErrorEnum;
    errorDescription?: Lpgtv503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lpgtv504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Lpgtv504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Lpgtv504ApplicationJson extends SpeakeasyBase {
    error?: Lpgtv504ApplicationJsonErrorEnum;
    errorDescription?: Lpgtv504ApplicationJsonErrorDescriptionEnum;
}
export declare class LpgtvResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    lpgtv400ApplicationJsonObject?: Lpgtv400ApplicationJson;
    lpgtv401ApplicationJsonObject?: Lpgtv401ApplicationJson;
    lpgtv404ApplicationJsonObject?: Lpgtv404ApplicationJson;
    lpgtv500ApplicationJsonObject?: Lpgtv500ApplicationJson;
    lpgtv502ApplicationJsonObject?: Lpgtv502ApplicationJson;
    lpgtv503ApplicationJsonObject?: Lpgtv503ApplicationJson;
    lpgtv504ApplicationJsonObject?: Lpgtv504ApplicationJson;
}
