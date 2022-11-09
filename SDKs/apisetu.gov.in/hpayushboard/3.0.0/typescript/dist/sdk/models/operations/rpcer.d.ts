import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RpcerRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    registrationNo: string;
}
export declare enum RpcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class RpcerRequestBody extends SpeakeasyBase {
    certificateParameters?: RpcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: RpcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class RpcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class RpcerRequest extends SpeakeasyBase {
    request?: RpcerRequestBody;
    security: RpcerSecurity;
}
export declare enum Rpcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Rpcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Rpcer400ApplicationJson extends SpeakeasyBase {
    error?: Rpcer400ApplicationJsonErrorEnum;
    errorDescription?: Rpcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rpcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Rpcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Rpcer401ApplicationJson extends SpeakeasyBase {
    error?: Rpcer401ApplicationJsonErrorEnum;
    errorDescription?: Rpcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rpcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Rpcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Rpcer404ApplicationJson extends SpeakeasyBase {
    error?: Rpcer404ApplicationJsonErrorEnum;
    errorDescription?: Rpcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rpcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Rpcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Rpcer500ApplicationJson extends SpeakeasyBase {
    error?: Rpcer500ApplicationJsonErrorEnum;
    errorDescription?: Rpcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rpcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Rpcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Rpcer502ApplicationJson extends SpeakeasyBase {
    error?: Rpcer502ApplicationJsonErrorEnum;
    errorDescription?: Rpcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rpcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Rpcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Rpcer503ApplicationJson extends SpeakeasyBase {
    error?: Rpcer503ApplicationJsonErrorEnum;
    errorDescription?: Rpcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rpcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Rpcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Rpcer504ApplicationJson extends SpeakeasyBase {
    error?: Rpcer504ApplicationJsonErrorEnum;
    errorDescription?: Rpcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class RpcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rpcer400ApplicationJsonObject?: Rpcer400ApplicationJson;
    rpcer401ApplicationJsonObject?: Rpcer401ApplicationJson;
    rpcer404ApplicationJsonObject?: Rpcer404ApplicationJson;
    rpcer500ApplicationJsonObject?: Rpcer500ApplicationJson;
    rpcer502ApplicationJsonObject?: Rpcer502ApplicationJson;
    rpcer503ApplicationJsonObject?: Rpcer503ApplicationJson;
    rpcer504ApplicationJsonObject?: Rpcer504ApplicationJson;
}
