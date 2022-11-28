import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BpcerRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    regNum: string;
    uid: string;
}
export declare enum BpcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class BpcerRequestBody extends SpeakeasyBase {
    certificateParameters?: BpcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: BpcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class BpcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Bpcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Bpcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Bpcer400ApplicationJson extends SpeakeasyBase {
    error?: Bpcer400ApplicationJsonErrorEnum;
    errorDescription?: Bpcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bpcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Bpcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Bpcer401ApplicationJson extends SpeakeasyBase {
    error?: Bpcer401ApplicationJsonErrorEnum;
    errorDescription?: Bpcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bpcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Bpcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Bpcer404ApplicationJson extends SpeakeasyBase {
    error?: Bpcer404ApplicationJsonErrorEnum;
    errorDescription?: Bpcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bpcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Bpcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Bpcer500ApplicationJson extends SpeakeasyBase {
    error?: Bpcer500ApplicationJsonErrorEnum;
    errorDescription?: Bpcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bpcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Bpcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Bpcer502ApplicationJson extends SpeakeasyBase {
    error?: Bpcer502ApplicationJsonErrorEnum;
    errorDescription?: Bpcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bpcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Bpcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Bpcer503ApplicationJson extends SpeakeasyBase {
    error?: Bpcer503ApplicationJsonErrorEnum;
    errorDescription?: Bpcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bpcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Bpcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Bpcer504ApplicationJson extends SpeakeasyBase {
    error?: Bpcer504ApplicationJsonErrorEnum;
    errorDescription?: Bpcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class BpcerRequest extends SpeakeasyBase {
    request?: BpcerRequestBody;
    security: BpcerSecurity;
}
export declare class BpcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bpcer400ApplicationJsonObject?: Bpcer400ApplicationJson;
    bpcer401ApplicationJsonObject?: Bpcer401ApplicationJson;
    bpcer404ApplicationJsonObject?: Bpcer404ApplicationJson;
    bpcer500ApplicationJsonObject?: Bpcer500ApplicationJson;
    bpcer502ApplicationJsonObject?: Bpcer502ApplicationJson;
    bpcer503ApplicationJsonObject?: Bpcer503ApplicationJson;
    bpcer504ApplicationJsonObject?: Bpcer504ApplicationJson;
}
