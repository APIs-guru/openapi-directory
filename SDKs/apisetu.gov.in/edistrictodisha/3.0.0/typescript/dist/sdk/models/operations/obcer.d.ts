import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObcerRequestBodyCertificateParameters extends SpeakeasyBase {
    uid: string;
    refno: string;
}
export declare enum ObcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class ObcerRequestBody extends SpeakeasyBase {
    certificateParameters?: ObcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: ObcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class ObcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Obcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Obcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Obcer400ApplicationJson extends SpeakeasyBase {
    error?: Obcer400ApplicationJsonErrorEnum;
    errorDescription?: Obcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Obcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Obcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Obcer401ApplicationJson extends SpeakeasyBase {
    error?: Obcer401ApplicationJsonErrorEnum;
    errorDescription?: Obcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Obcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Obcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Obcer404ApplicationJson extends SpeakeasyBase {
    error?: Obcer404ApplicationJsonErrorEnum;
    errorDescription?: Obcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Obcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Obcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Obcer500ApplicationJson extends SpeakeasyBase {
    error?: Obcer500ApplicationJsonErrorEnum;
    errorDescription?: Obcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Obcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Obcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Obcer502ApplicationJson extends SpeakeasyBase {
    error?: Obcer502ApplicationJsonErrorEnum;
    errorDescription?: Obcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Obcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Obcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Obcer503ApplicationJson extends SpeakeasyBase {
    error?: Obcer503ApplicationJsonErrorEnum;
    errorDescription?: Obcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Obcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Obcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Obcer504ApplicationJson extends SpeakeasyBase {
    error?: Obcer504ApplicationJsonErrorEnum;
    errorDescription?: Obcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class ObcerRequest extends SpeakeasyBase {
    request?: ObcerRequestBody;
    security: ObcerSecurity;
}
export declare class ObcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    obcer400ApplicationJsonObject?: Obcer400ApplicationJson;
    obcer401ApplicationJsonObject?: Obcer401ApplicationJson;
    obcer404ApplicationJsonObject?: Obcer404ApplicationJson;
    obcer500ApplicationJsonObject?: Obcer500ApplicationJson;
    obcer502ApplicationJsonObject?: Obcer502ApplicationJson;
    obcer503ApplicationJsonObject?: Obcer503ApplicationJson;
    obcer504ApplicationJsonObject?: Obcer504ApplicationJson;
}
