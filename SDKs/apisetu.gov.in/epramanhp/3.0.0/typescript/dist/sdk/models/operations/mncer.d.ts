import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MncerRequestBodyCertificateParameters extends SpeakeasyBase {
    name: string;
    refNo: string;
}
export declare enum MncerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class MncerRequestBody extends SpeakeasyBase {
    certificateParameters?: MncerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: MncerRequestBodyFormatEnum;
    txnId: string;
}
export declare class MncerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Mncer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Mncer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Mncer400ApplicationJson extends SpeakeasyBase {
    error?: Mncer400ApplicationJsonErrorEnum;
    errorDescription?: Mncer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mncer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Mncer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Mncer401ApplicationJson extends SpeakeasyBase {
    error?: Mncer401ApplicationJsonErrorEnum;
    errorDescription?: Mncer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mncer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Mncer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Mncer404ApplicationJson extends SpeakeasyBase {
    error?: Mncer404ApplicationJsonErrorEnum;
    errorDescription?: Mncer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mncer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Mncer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Mncer500ApplicationJson extends SpeakeasyBase {
    error?: Mncer500ApplicationJsonErrorEnum;
    errorDescription?: Mncer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mncer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Mncer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Mncer502ApplicationJson extends SpeakeasyBase {
    error?: Mncer502ApplicationJsonErrorEnum;
    errorDescription?: Mncer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mncer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Mncer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Mncer503ApplicationJson extends SpeakeasyBase {
    error?: Mncer503ApplicationJsonErrorEnum;
    errorDescription?: Mncer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mncer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Mncer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Mncer504ApplicationJson extends SpeakeasyBase {
    error?: Mncer504ApplicationJsonErrorEnum;
    errorDescription?: Mncer504ApplicationJsonErrorDescriptionEnum;
}
export declare class MncerRequest extends SpeakeasyBase {
    request?: MncerRequestBody;
    security: MncerSecurity;
}
export declare class MncerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mncer400ApplicationJsonObject?: Mncer400ApplicationJson;
    mncer401ApplicationJsonObject?: Mncer401ApplicationJson;
    mncer404ApplicationJsonObject?: Mncer404ApplicationJson;
    mncer500ApplicationJsonObject?: Mncer500ApplicationJson;
    mncer502ApplicationJsonObject?: Mncer502ApplicationJson;
    mncer503ApplicationJsonObject?: Mncer503ApplicationJson;
    mncer504ApplicationJsonObject?: Mncer504ApplicationJson;
}
