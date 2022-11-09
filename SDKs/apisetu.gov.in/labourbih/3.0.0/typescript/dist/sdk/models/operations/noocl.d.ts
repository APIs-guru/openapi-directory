import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NooclRequestBodyCertificateParameters extends SpeakeasyBase {
    refNo: string;
    tokenNo: string;
}
export declare enum NooclRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class NooclRequestBody extends SpeakeasyBase {
    certificateParameters?: NooclRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: NooclRequestBodyFormatEnum;
    txnId: string;
}
export declare class NooclSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class NooclRequest extends SpeakeasyBase {
    request?: NooclRequestBody;
    security: NooclSecurity;
}
export declare enum Noocl400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Noocl400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Noocl400ApplicationJson extends SpeakeasyBase {
    error?: Noocl400ApplicationJsonErrorEnum;
    errorDescription?: Noocl400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Noocl401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Noocl401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Noocl401ApplicationJson extends SpeakeasyBase {
    error?: Noocl401ApplicationJsonErrorEnum;
    errorDescription?: Noocl401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Noocl404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Noocl404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Noocl404ApplicationJson extends SpeakeasyBase {
    error?: Noocl404ApplicationJsonErrorEnum;
    errorDescription?: Noocl404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Noocl500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Noocl500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Noocl500ApplicationJson extends SpeakeasyBase {
    error?: Noocl500ApplicationJsonErrorEnum;
    errorDescription?: Noocl500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Noocl502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Noocl502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Noocl502ApplicationJson extends SpeakeasyBase {
    error?: Noocl502ApplicationJsonErrorEnum;
    errorDescription?: Noocl502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Noocl503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Noocl503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Noocl503ApplicationJson extends SpeakeasyBase {
    error?: Noocl503ApplicationJsonErrorEnum;
    errorDescription?: Noocl503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Noocl504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Noocl504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Noocl504ApplicationJson extends SpeakeasyBase {
    error?: Noocl504ApplicationJsonErrorEnum;
    errorDescription?: Noocl504ApplicationJsonErrorDescriptionEnum;
}
export declare class NooclResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    noocl400ApplicationJsonObject?: Noocl400ApplicationJson;
    noocl401ApplicationJsonObject?: Noocl401ApplicationJson;
    noocl404ApplicationJsonObject?: Noocl404ApplicationJson;
    noocl500ApplicationJsonObject?: Noocl500ApplicationJson;
    noocl502ApplicationJsonObject?: Noocl502ApplicationJson;
    noocl503ApplicationJsonObject?: Noocl503ApplicationJson;
    noocl504ApplicationJsonObject?: Noocl504ApplicationJson;
}
