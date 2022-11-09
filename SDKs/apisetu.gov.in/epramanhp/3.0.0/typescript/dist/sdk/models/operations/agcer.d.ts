import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AgcerRequestBodyCertificateParameters extends SpeakeasyBase {
    name: string;
    refNo: string;
}
export declare enum AgcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class AgcerRequestBody extends SpeakeasyBase {
    certificateParameters?: AgcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: AgcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class AgcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class AgcerRequest extends SpeakeasyBase {
    request?: AgcerRequestBody;
    security: AgcerSecurity;
}
export declare enum Agcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Agcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Agcer400ApplicationJson extends SpeakeasyBase {
    error?: Agcer400ApplicationJsonErrorEnum;
    errorDescription?: Agcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Agcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Agcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Agcer401ApplicationJson extends SpeakeasyBase {
    error?: Agcer401ApplicationJsonErrorEnum;
    errorDescription?: Agcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Agcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Agcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Agcer404ApplicationJson extends SpeakeasyBase {
    error?: Agcer404ApplicationJsonErrorEnum;
    errorDescription?: Agcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Agcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Agcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Agcer500ApplicationJson extends SpeakeasyBase {
    error?: Agcer500ApplicationJsonErrorEnum;
    errorDescription?: Agcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Agcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Agcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Agcer502ApplicationJson extends SpeakeasyBase {
    error?: Agcer502ApplicationJsonErrorEnum;
    errorDescription?: Agcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Agcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Agcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Agcer503ApplicationJson extends SpeakeasyBase {
    error?: Agcer503ApplicationJsonErrorEnum;
    errorDescription?: Agcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Agcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Agcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Agcer504ApplicationJson extends SpeakeasyBase {
    error?: Agcer504ApplicationJsonErrorEnum;
    errorDescription?: Agcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class AgcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    agcer400ApplicationJsonObject?: Agcer400ApplicationJson;
    agcer401ApplicationJsonObject?: Agcer401ApplicationJson;
    agcer404ApplicationJsonObject?: Agcer404ApplicationJson;
    agcer500ApplicationJsonObject?: Agcer500ApplicationJson;
    agcer502ApplicationJsonObject?: Agcer502ApplicationJson;
    agcer503ApplicationJsonObject?: Agcer503ApplicationJson;
    agcer504ApplicationJsonObject?: Agcer504ApplicationJson;
}
