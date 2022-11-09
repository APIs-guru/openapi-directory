import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DpcerRequestBodyCertificateParameters extends SpeakeasyBase {
    certificateNumber: string;
}
export declare enum DpcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class DpcerRequestBody extends SpeakeasyBase {
    certificateParameters?: DpcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: DpcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class DpcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class DpcerRequest extends SpeakeasyBase {
    request?: DpcerRequestBody;
    security: DpcerSecurity;
}
export declare enum Dpcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Dpcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Dpcer400ApplicationJson extends SpeakeasyBase {
    error?: Dpcer400ApplicationJsonErrorEnum;
    errorDescription?: Dpcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dpcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Dpcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Dpcer401ApplicationJson extends SpeakeasyBase {
    error?: Dpcer401ApplicationJsonErrorEnum;
    errorDescription?: Dpcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dpcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Dpcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Dpcer404ApplicationJson extends SpeakeasyBase {
    error?: Dpcer404ApplicationJsonErrorEnum;
    errorDescription?: Dpcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dpcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Dpcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Dpcer500ApplicationJson extends SpeakeasyBase {
    error?: Dpcer500ApplicationJsonErrorEnum;
    errorDescription?: Dpcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dpcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Dpcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Dpcer502ApplicationJson extends SpeakeasyBase {
    error?: Dpcer502ApplicationJsonErrorEnum;
    errorDescription?: Dpcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dpcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Dpcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Dpcer503ApplicationJson extends SpeakeasyBase {
    error?: Dpcer503ApplicationJsonErrorEnum;
    errorDescription?: Dpcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dpcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Dpcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Dpcer504ApplicationJson extends SpeakeasyBase {
    error?: Dpcer504ApplicationJsonErrorEnum;
    errorDescription?: Dpcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class DpcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dpcer400ApplicationJsonObject?: Dpcer400ApplicationJson;
    dpcer401ApplicationJsonObject?: Dpcer401ApplicationJson;
    dpcer404ApplicationJsonObject?: Dpcer404ApplicationJson;
    dpcer500ApplicationJsonObject?: Dpcer500ApplicationJson;
    dpcer502ApplicationJsonObject?: Dpcer502ApplicationJson;
    dpcer503ApplicationJsonObject?: Dpcer503ApplicationJson;
    dpcer504ApplicationJsonObject?: Dpcer504ApplicationJson;
}
