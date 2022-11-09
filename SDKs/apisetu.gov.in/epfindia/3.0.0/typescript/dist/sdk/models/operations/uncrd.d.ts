import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UncrdRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    uan: string;
}
export declare enum UncrdRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class UncrdRequestBody extends SpeakeasyBase {
    certificateParameters?: UncrdRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: UncrdRequestBodyFormatEnum;
    txnId: string;
}
export declare class UncrdSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class UncrdRequest extends SpeakeasyBase {
    request?: UncrdRequestBody;
    security: UncrdSecurity;
}
export declare enum Uncrd400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Uncrd400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Uncrd400ApplicationJson extends SpeakeasyBase {
    error?: Uncrd400ApplicationJsonErrorEnum;
    errorDescription?: Uncrd400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Uncrd401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Uncrd401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Uncrd401ApplicationJson extends SpeakeasyBase {
    error?: Uncrd401ApplicationJsonErrorEnum;
    errorDescription?: Uncrd401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Uncrd404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Uncrd404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Uncrd404ApplicationJson extends SpeakeasyBase {
    error?: Uncrd404ApplicationJsonErrorEnum;
    errorDescription?: Uncrd404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Uncrd500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Uncrd500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Uncrd500ApplicationJson extends SpeakeasyBase {
    error?: Uncrd500ApplicationJsonErrorEnum;
    errorDescription?: Uncrd500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Uncrd502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Uncrd502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Uncrd502ApplicationJson extends SpeakeasyBase {
    error?: Uncrd502ApplicationJsonErrorEnum;
    errorDescription?: Uncrd502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Uncrd503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Uncrd503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Uncrd503ApplicationJson extends SpeakeasyBase {
    error?: Uncrd503ApplicationJsonErrorEnum;
    errorDescription?: Uncrd503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Uncrd504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Uncrd504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Uncrd504ApplicationJson extends SpeakeasyBase {
    error?: Uncrd504ApplicationJsonErrorEnum;
    errorDescription?: Uncrd504ApplicationJsonErrorDescriptionEnum;
}
export declare class UncrdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    uncrd400ApplicationJsonObject?: Uncrd400ApplicationJson;
    uncrd401ApplicationJsonObject?: Uncrd401ApplicationJson;
    uncrd404ApplicationJsonObject?: Uncrd404ApplicationJson;
    uncrd500ApplicationJsonObject?: Uncrd500ApplicationJson;
    uncrd502ApplicationJsonObject?: Uncrd502ApplicationJson;
    uncrd503ApplicationJsonObject?: Uncrd503ApplicationJson;
    uncrd504ApplicationJsonObject?: Uncrd504ApplicationJson;
}
