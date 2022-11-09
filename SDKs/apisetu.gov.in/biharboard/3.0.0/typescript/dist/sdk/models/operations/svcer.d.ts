import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SvcerRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    rroll: string;
    rrollCode: string;
    year: string;
}
export declare enum SvcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class SvcerRequestBody extends SpeakeasyBase {
    certificateParameters?: SvcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: SvcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class SvcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class SvcerRequest extends SpeakeasyBase {
    request?: SvcerRequestBody;
    security: SvcerSecurity;
}
export declare enum Svcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Svcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Svcer400ApplicationJson extends SpeakeasyBase {
    error?: Svcer400ApplicationJsonErrorEnum;
    errorDescription?: Svcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Svcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Svcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Svcer401ApplicationJson extends SpeakeasyBase {
    error?: Svcer401ApplicationJsonErrorEnum;
    errorDescription?: Svcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Svcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Svcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Svcer404ApplicationJson extends SpeakeasyBase {
    error?: Svcer404ApplicationJsonErrorEnum;
    errorDescription?: Svcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Svcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Svcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Svcer500ApplicationJson extends SpeakeasyBase {
    error?: Svcer500ApplicationJsonErrorEnum;
    errorDescription?: Svcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Svcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Svcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Svcer502ApplicationJson extends SpeakeasyBase {
    error?: Svcer502ApplicationJsonErrorEnum;
    errorDescription?: Svcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Svcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Svcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Svcer503ApplicationJson extends SpeakeasyBase {
    error?: Svcer503ApplicationJsonErrorEnum;
    errorDescription?: Svcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Svcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Svcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Svcer504ApplicationJson extends SpeakeasyBase {
    error?: Svcer504ApplicationJsonErrorEnum;
    errorDescription?: Svcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class SvcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    svcer400ApplicationJsonObject?: Svcer400ApplicationJson;
    svcer401ApplicationJsonObject?: Svcer401ApplicationJson;
    svcer404ApplicationJsonObject?: Svcer404ApplicationJson;
    svcer500ApplicationJsonObject?: Svcer500ApplicationJson;
    svcer502ApplicationJsonObject?: Svcer502ApplicationJson;
    svcer503ApplicationJsonObject?: Svcer503ApplicationJson;
    svcer504ApplicationJsonObject?: Svcer504ApplicationJson;
}
