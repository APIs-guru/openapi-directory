import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TripcRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    gender: string;
    policyNo: string;
    policyType: string;
}
export declare enum TripcRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class TripcRequestBody extends SpeakeasyBase {
    certificateParameters?: TripcRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: TripcRequestBodyFormatEnum;
    txnId: string;
}
export declare class TripcSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Tripc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Tripc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Tripc400ApplicationJson extends SpeakeasyBase {
    error?: Tripc400ApplicationJsonErrorEnum;
    errorDescription?: Tripc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tripc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Tripc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Tripc401ApplicationJson extends SpeakeasyBase {
    error?: Tripc401ApplicationJsonErrorEnum;
    errorDescription?: Tripc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tripc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Tripc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Tripc404ApplicationJson extends SpeakeasyBase {
    error?: Tripc404ApplicationJsonErrorEnum;
    errorDescription?: Tripc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tripc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Tripc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Tripc500ApplicationJson extends SpeakeasyBase {
    error?: Tripc500ApplicationJsonErrorEnum;
    errorDescription?: Tripc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tripc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Tripc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Tripc502ApplicationJson extends SpeakeasyBase {
    error?: Tripc502ApplicationJsonErrorEnum;
    errorDescription?: Tripc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tripc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Tripc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Tripc503ApplicationJson extends SpeakeasyBase {
    error?: Tripc503ApplicationJsonErrorEnum;
    errorDescription?: Tripc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tripc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Tripc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Tripc504ApplicationJson extends SpeakeasyBase {
    error?: Tripc504ApplicationJsonErrorEnum;
    errorDescription?: Tripc504ApplicationJsonErrorDescriptionEnum;
}
export declare class TripcRequest extends SpeakeasyBase {
    request?: TripcRequestBody;
    security: TripcSecurity;
}
export declare class TripcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tripc400ApplicationJsonObject?: Tripc400ApplicationJson;
    tripc401ApplicationJsonObject?: Tripc401ApplicationJson;
    tripc404ApplicationJsonObject?: Tripc404ApplicationJson;
    tripc500ApplicationJsonObject?: Tripc500ApplicationJson;
    tripc502ApplicationJsonObject?: Tripc502ApplicationJson;
    tripc503ApplicationJsonObject?: Tripc503ApplicationJson;
    tripc504ApplicationJsonObject?: Tripc504ApplicationJson;
}
