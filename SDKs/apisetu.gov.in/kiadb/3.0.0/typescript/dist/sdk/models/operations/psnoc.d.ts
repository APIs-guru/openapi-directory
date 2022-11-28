import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PsnocRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    regNum: string;
    uid: string;
}
export declare enum PsnocRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class PsnocRequestBody extends SpeakeasyBase {
    certificateParameters?: PsnocRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: PsnocRequestBodyFormatEnum;
    txnId: string;
}
export declare class PsnocSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Psnoc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Psnoc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Psnoc400ApplicationJson extends SpeakeasyBase {
    error?: Psnoc400ApplicationJsonErrorEnum;
    errorDescription?: Psnoc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Psnoc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Psnoc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Psnoc401ApplicationJson extends SpeakeasyBase {
    error?: Psnoc401ApplicationJsonErrorEnum;
    errorDescription?: Psnoc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Psnoc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Psnoc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Psnoc404ApplicationJson extends SpeakeasyBase {
    error?: Psnoc404ApplicationJsonErrorEnum;
    errorDescription?: Psnoc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Psnoc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Psnoc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Psnoc500ApplicationJson extends SpeakeasyBase {
    error?: Psnoc500ApplicationJsonErrorEnum;
    errorDescription?: Psnoc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Psnoc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Psnoc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Psnoc502ApplicationJson extends SpeakeasyBase {
    error?: Psnoc502ApplicationJsonErrorEnum;
    errorDescription?: Psnoc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Psnoc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Psnoc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Psnoc503ApplicationJson extends SpeakeasyBase {
    error?: Psnoc503ApplicationJsonErrorEnum;
    errorDescription?: Psnoc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Psnoc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Psnoc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Psnoc504ApplicationJson extends SpeakeasyBase {
    error?: Psnoc504ApplicationJsonErrorEnum;
    errorDescription?: Psnoc504ApplicationJsonErrorDescriptionEnum;
}
export declare class PsnocRequest extends SpeakeasyBase {
    request?: PsnocRequestBody;
    security: PsnocSecurity;
}
export declare class PsnocResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    psnoc400ApplicationJsonObject?: Psnoc400ApplicationJson;
    psnoc401ApplicationJsonObject?: Psnoc401ApplicationJson;
    psnoc404ApplicationJsonObject?: Psnoc404ApplicationJson;
    psnoc500ApplicationJsonObject?: Psnoc500ApplicationJson;
    psnoc502ApplicationJsonObject?: Psnoc502ApplicationJson;
    psnoc503ApplicationJsonObject?: Psnoc503ApplicationJson;
    psnoc504ApplicationJsonObject?: Psnoc504ApplicationJson;
}
