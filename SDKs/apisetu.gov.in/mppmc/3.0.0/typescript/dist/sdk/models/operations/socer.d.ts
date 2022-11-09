import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SocerRequestBodyCertificateParameters extends SpeakeasyBase {
    appno: string;
    dateOfBirth: string;
    enrolno: string;
    typOfCert: string;
}
export declare enum SocerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class SocerRequestBody extends SpeakeasyBase {
    certificateParameters?: SocerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: SocerRequestBodyFormatEnum;
    txnId: string;
}
export declare class SocerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class SocerRequest extends SpeakeasyBase {
    request?: SocerRequestBody;
    security: SocerSecurity;
}
export declare enum Socer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Socer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Socer400ApplicationJson extends SpeakeasyBase {
    error?: Socer400ApplicationJsonErrorEnum;
    errorDescription?: Socer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Socer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Socer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Socer401ApplicationJson extends SpeakeasyBase {
    error?: Socer401ApplicationJsonErrorEnum;
    errorDescription?: Socer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Socer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Socer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Socer404ApplicationJson extends SpeakeasyBase {
    error?: Socer404ApplicationJsonErrorEnum;
    errorDescription?: Socer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Socer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Socer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Socer500ApplicationJson extends SpeakeasyBase {
    error?: Socer500ApplicationJsonErrorEnum;
    errorDescription?: Socer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Socer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Socer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Socer502ApplicationJson extends SpeakeasyBase {
    error?: Socer502ApplicationJsonErrorEnum;
    errorDescription?: Socer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Socer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Socer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Socer503ApplicationJson extends SpeakeasyBase {
    error?: Socer503ApplicationJsonErrorEnum;
    errorDescription?: Socer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Socer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Socer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Socer504ApplicationJson extends SpeakeasyBase {
    error?: Socer504ApplicationJsonErrorEnum;
    errorDescription?: Socer504ApplicationJsonErrorDescriptionEnum;
}
export declare class SocerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    socer400ApplicationJsonObject?: Socer400ApplicationJson;
    socer401ApplicationJsonObject?: Socer401ApplicationJson;
    socer404ApplicationJsonObject?: Socer404ApplicationJson;
    socer500ApplicationJsonObject?: Socer500ApplicationJson;
    socer502ApplicationJsonObject?: Socer502ApplicationJson;
    socer503ApplicationJsonObject?: Socer503ApplicationJson;
    socer504ApplicationJsonObject?: Socer504ApplicationJson;
}
