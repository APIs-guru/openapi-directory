import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class EscerRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    docid: string;
    fullName: string;
}
export declare enum EscerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class EscerRequestBody extends SpeakeasyBase {
    certificateParameters?: EscerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: EscerRequestBodyFormatEnum;
    txnId: string;
}
export declare class EscerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class EscerRequest extends SpeakeasyBase {
    request?: EscerRequestBody;
    security: EscerSecurity;
}
export declare enum Escer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Escer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Escer400ApplicationJson extends SpeakeasyBase {
    error?: Escer400ApplicationJsonErrorEnum;
    errorDescription?: Escer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Escer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Escer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Escer401ApplicationJson extends SpeakeasyBase {
    error?: Escer401ApplicationJsonErrorEnum;
    errorDescription?: Escer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Escer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Escer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Escer404ApplicationJson extends SpeakeasyBase {
    error?: Escer404ApplicationJsonErrorEnum;
    errorDescription?: Escer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Escer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Escer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Escer500ApplicationJson extends SpeakeasyBase {
    error?: Escer500ApplicationJsonErrorEnum;
    errorDescription?: Escer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Escer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Escer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Escer502ApplicationJson extends SpeakeasyBase {
    error?: Escer502ApplicationJsonErrorEnum;
    errorDescription?: Escer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Escer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Escer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Escer503ApplicationJson extends SpeakeasyBase {
    error?: Escer503ApplicationJsonErrorEnum;
    errorDescription?: Escer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Escer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Escer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Escer504ApplicationJson extends SpeakeasyBase {
    error?: Escer504ApplicationJsonErrorEnum;
    errorDescription?: Escer504ApplicationJsonErrorDescriptionEnum;
}
export declare class EscerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    escer400ApplicationJsonObject?: Escer400ApplicationJson;
    escer401ApplicationJsonObject?: Escer401ApplicationJson;
    escer404ApplicationJsonObject?: Escer404ApplicationJson;
    escer500ApplicationJsonObject?: Escer500ApplicationJson;
    escer502ApplicationJsonObject?: Escer502ApplicationJson;
    escer503ApplicationJsonObject?: Escer503ApplicationJson;
    escer504ApplicationJsonObject?: Escer504ApplicationJson;
}
