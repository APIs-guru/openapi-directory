import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RacerRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    dsn: string;
}
export declare enum RacerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class RacerRequestBody extends SpeakeasyBase {
    certificateParameters?: RacerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: RacerRequestBodyFormatEnum;
    txnId: string;
}
export declare class RacerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class RacerRequest extends SpeakeasyBase {
    request?: RacerRequestBody;
    security: RacerSecurity;
}
export declare enum Racer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Racer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Racer400ApplicationJson extends SpeakeasyBase {
    error?: Racer400ApplicationJsonErrorEnum;
    errorDescription?: Racer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Racer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Racer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Racer401ApplicationJson extends SpeakeasyBase {
    error?: Racer401ApplicationJsonErrorEnum;
    errorDescription?: Racer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Racer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Racer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Racer404ApplicationJson extends SpeakeasyBase {
    error?: Racer404ApplicationJsonErrorEnum;
    errorDescription?: Racer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Racer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Racer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Racer500ApplicationJson extends SpeakeasyBase {
    error?: Racer500ApplicationJsonErrorEnum;
    errorDescription?: Racer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Racer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Racer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Racer502ApplicationJson extends SpeakeasyBase {
    error?: Racer502ApplicationJsonErrorEnum;
    errorDescription?: Racer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Racer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Racer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Racer503ApplicationJson extends SpeakeasyBase {
    error?: Racer503ApplicationJsonErrorEnum;
    errorDescription?: Racer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Racer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Racer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Racer504ApplicationJson extends SpeakeasyBase {
    error?: Racer504ApplicationJsonErrorEnum;
    errorDescription?: Racer504ApplicationJsonErrorDescriptionEnum;
}
export declare class RacerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    racer400ApplicationJsonObject?: Racer400ApplicationJson;
    racer401ApplicationJsonObject?: Racer401ApplicationJson;
    racer404ApplicationJsonObject?: Racer404ApplicationJson;
    racer500ApplicationJsonObject?: Racer500ApplicationJson;
    racer502ApplicationJsonObject?: Racer502ApplicationJson;
    racer503ApplicationJsonObject?: Racer503ApplicationJson;
    racer504ApplicationJsonObject?: Racer504ApplicationJson;
}
