import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CyipcRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    policyNumber: string;
}
export declare enum CyipcRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class CyipcRequestBody extends SpeakeasyBase {
    certificateParameters?: CyipcRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: CyipcRequestBodyFormatEnum;
    txnId: string;
}
export declare class CyipcSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Cyipc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cyipc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Cyipc400ApplicationJson extends SpeakeasyBase {
    error?: Cyipc400ApplicationJsonErrorEnum;
    errorDescription?: Cyipc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cyipc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cyipc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Cyipc401ApplicationJson extends SpeakeasyBase {
    error?: Cyipc401ApplicationJsonErrorEnum;
    errorDescription?: Cyipc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cyipc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cyipc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Cyipc404ApplicationJson extends SpeakeasyBase {
    error?: Cyipc404ApplicationJsonErrorEnum;
    errorDescription?: Cyipc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cyipc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cyipc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Cyipc500ApplicationJson extends SpeakeasyBase {
    error?: Cyipc500ApplicationJsonErrorEnum;
    errorDescription?: Cyipc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cyipc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cyipc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Cyipc502ApplicationJson extends SpeakeasyBase {
    error?: Cyipc502ApplicationJsonErrorEnum;
    errorDescription?: Cyipc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cyipc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cyipc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Cyipc503ApplicationJson extends SpeakeasyBase {
    error?: Cyipc503ApplicationJsonErrorEnum;
    errorDescription?: Cyipc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cyipc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cyipc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Cyipc504ApplicationJson extends SpeakeasyBase {
    error?: Cyipc504ApplicationJsonErrorEnum;
    errorDescription?: Cyipc504ApplicationJsonErrorDescriptionEnum;
}
export declare class CyipcRequest extends SpeakeasyBase {
    request?: CyipcRequestBody;
    security: CyipcSecurity;
}
export declare class CyipcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cyipc400ApplicationJsonObject?: Cyipc400ApplicationJson;
    cyipc401ApplicationJsonObject?: Cyipc401ApplicationJson;
    cyipc404ApplicationJsonObject?: Cyipc404ApplicationJson;
    cyipc500ApplicationJsonObject?: Cyipc500ApplicationJson;
    cyipc502ApplicationJsonObject?: Cyipc502ApplicationJson;
    cyipc503ApplicationJsonObject?: Cyipc503ApplicationJson;
    cyipc504ApplicationJsonObject?: Cyipc504ApplicationJson;
}
