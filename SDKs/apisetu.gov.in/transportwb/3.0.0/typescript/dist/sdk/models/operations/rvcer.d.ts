import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RvcerRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    uid: string;
    chasisNo: string;
    regNo: string;
}
export declare enum RvcerRequestBodyFormatEnum {
    Xml = "xml",
    Pdf = "pdf"
}
export declare class RvcerRequestBody extends SpeakeasyBase {
    certificateParameters?: RvcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: RvcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class RvcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class RvcerRequest extends SpeakeasyBase {
    request?: RvcerRequestBody;
    security: RvcerSecurity;
}
export declare enum Rvcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Rvcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Rvcer400ApplicationJson extends SpeakeasyBase {
    error?: Rvcer400ApplicationJsonErrorEnum;
    errorDescription?: Rvcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rvcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Rvcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Rvcer401ApplicationJson extends SpeakeasyBase {
    error?: Rvcer401ApplicationJsonErrorEnum;
    errorDescription?: Rvcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rvcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Rvcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Rvcer404ApplicationJson extends SpeakeasyBase {
    error?: Rvcer404ApplicationJsonErrorEnum;
    errorDescription?: Rvcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rvcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Rvcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Rvcer500ApplicationJson extends SpeakeasyBase {
    error?: Rvcer500ApplicationJsonErrorEnum;
    errorDescription?: Rvcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rvcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Rvcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Rvcer502ApplicationJson extends SpeakeasyBase {
    error?: Rvcer502ApplicationJsonErrorEnum;
    errorDescription?: Rvcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rvcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Rvcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Rvcer503ApplicationJson extends SpeakeasyBase {
    error?: Rvcer503ApplicationJsonErrorEnum;
    errorDescription?: Rvcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rvcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Rvcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Rvcer504ApplicationJson extends SpeakeasyBase {
    error?: Rvcer504ApplicationJsonErrorEnum;
    errorDescription?: Rvcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class RvcerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rvcer400ApplicationJsonObject?: Rvcer400ApplicationJson;
    rvcer401ApplicationJsonObject?: Rvcer401ApplicationJson;
    rvcer404ApplicationJsonObject?: Rvcer404ApplicationJson;
    rvcer500ApplicationJsonObject?: Rvcer500ApplicationJson;
    rvcer502ApplicationJsonObject?: Rvcer502ApplicationJson;
    rvcer503ApplicationJsonObject?: Rvcer503ApplicationJson;
    rvcer504ApplicationJsonObject?: Rvcer504ApplicationJson;
}
