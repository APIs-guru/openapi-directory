import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MiipcRequestBodyCertificateParameters extends SpeakeasyBase {
    insuredDob: string;
    policyNo: string;
}
export declare enum MiipcRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class MiipcRequestBody extends SpeakeasyBase {
    certificateParameters?: MiipcRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: MiipcRequestBodyFormatEnum;
    txnId: string;
}
export declare class MiipcSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class MiipcRequest extends SpeakeasyBase {
    request?: MiipcRequestBody;
    security: MiipcSecurity;
}
export declare enum Miipc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Miipc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Miipc400ApplicationJson extends SpeakeasyBase {
    error?: Miipc400ApplicationJsonErrorEnum;
    errorDescription?: Miipc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Miipc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Miipc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Miipc401ApplicationJson extends SpeakeasyBase {
    error?: Miipc401ApplicationJsonErrorEnum;
    errorDescription?: Miipc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Miipc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Miipc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Miipc404ApplicationJson extends SpeakeasyBase {
    error?: Miipc404ApplicationJsonErrorEnum;
    errorDescription?: Miipc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Miipc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Miipc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Miipc500ApplicationJson extends SpeakeasyBase {
    error?: Miipc500ApplicationJsonErrorEnum;
    errorDescription?: Miipc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Miipc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Miipc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Miipc502ApplicationJson extends SpeakeasyBase {
    error?: Miipc502ApplicationJsonErrorEnum;
    errorDescription?: Miipc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Miipc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Miipc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Miipc503ApplicationJson extends SpeakeasyBase {
    error?: Miipc503ApplicationJsonErrorEnum;
    errorDescription?: Miipc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Miipc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Miipc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Miipc504ApplicationJson extends SpeakeasyBase {
    error?: Miipc504ApplicationJsonErrorEnum;
    errorDescription?: Miipc504ApplicationJsonErrorDescriptionEnum;
}
export declare class MiipcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    miipc400ApplicationJsonObject?: Miipc400ApplicationJson;
    miipc401ApplicationJsonObject?: Miipc401ApplicationJson;
    miipc404ApplicationJsonObject?: Miipc404ApplicationJson;
    miipc500ApplicationJsonObject?: Miipc500ApplicationJson;
    miipc502ApplicationJsonObject?: Miipc502ApplicationJson;
    miipc503ApplicationJsonObject?: Miipc503ApplicationJson;
    miipc504ApplicationJsonObject?: Miipc504ApplicationJson;
}
