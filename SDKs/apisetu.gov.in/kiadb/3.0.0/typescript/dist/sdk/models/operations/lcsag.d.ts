import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LcsagRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    regNum: string;
    uid: string;
}
export declare enum LcsagRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class LcsagRequestBody extends SpeakeasyBase {
    certificateParameters?: LcsagRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: LcsagRequestBodyFormatEnum;
    txnId: string;
}
export declare class LcsagSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class LcsagRequest extends SpeakeasyBase {
    request?: LcsagRequestBody;
    security: LcsagSecurity;
}
export declare enum Lcsag400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Lcsag400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Lcsag400ApplicationJson extends SpeakeasyBase {
    error?: Lcsag400ApplicationJsonErrorEnum;
    errorDescription?: Lcsag400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lcsag401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Lcsag401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Lcsag401ApplicationJson extends SpeakeasyBase {
    error?: Lcsag401ApplicationJsonErrorEnum;
    errorDescription?: Lcsag401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lcsag404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Lcsag404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Lcsag404ApplicationJson extends SpeakeasyBase {
    error?: Lcsag404ApplicationJsonErrorEnum;
    errorDescription?: Lcsag404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lcsag500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Lcsag500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Lcsag500ApplicationJson extends SpeakeasyBase {
    error?: Lcsag500ApplicationJsonErrorEnum;
    errorDescription?: Lcsag500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lcsag502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Lcsag502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Lcsag502ApplicationJson extends SpeakeasyBase {
    error?: Lcsag502ApplicationJsonErrorEnum;
    errorDescription?: Lcsag502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lcsag503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Lcsag503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Lcsag503ApplicationJson extends SpeakeasyBase {
    error?: Lcsag503ApplicationJsonErrorEnum;
    errorDescription?: Lcsag503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lcsag504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Lcsag504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Lcsag504ApplicationJson extends SpeakeasyBase {
    error?: Lcsag504ApplicationJsonErrorEnum;
    errorDescription?: Lcsag504ApplicationJsonErrorDescriptionEnum;
}
export declare class LcsagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    lcsag400ApplicationJsonObject?: Lcsag400ApplicationJson;
    lcsag401ApplicationJsonObject?: Lcsag401ApplicationJson;
    lcsag404ApplicationJsonObject?: Lcsag404ApplicationJson;
    lcsag500ApplicationJsonObject?: Lcsag500ApplicationJson;
    lcsag502ApplicationJsonObject?: Lcsag502ApplicationJson;
    lcsag503ApplicationJsonObject?: Lcsag503ApplicationJson;
    lcsag504ApplicationJsonObject?: Lcsag504ApplicationJson;
}
