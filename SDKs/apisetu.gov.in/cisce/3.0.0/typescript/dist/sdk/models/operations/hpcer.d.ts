import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class HpcerRequestBodyCertificateParameters extends SpeakeasyBase {
    cuid: string;
    dob: string;
    fullName: string;
    idxn: string;
    uid: string;
    yoe: string;
}
export declare enum HpcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class HpcerRequestBody extends SpeakeasyBase {
    certificateParameters?: HpcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: HpcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class HpcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class HpcerRequest extends SpeakeasyBase {
    request?: HpcerRequestBody;
    security: HpcerSecurity;
}
export declare enum Hpcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Hpcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Hpcer400ApplicationJson extends SpeakeasyBase {
    error?: Hpcer400ApplicationJsonErrorEnum;
    errorDescription?: Hpcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hpcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Hpcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Hpcer401ApplicationJson extends SpeakeasyBase {
    error?: Hpcer401ApplicationJsonErrorEnum;
    errorDescription?: Hpcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hpcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Hpcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Hpcer404ApplicationJson extends SpeakeasyBase {
    error?: Hpcer404ApplicationJsonErrorEnum;
    errorDescription?: Hpcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hpcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Hpcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Hpcer500ApplicationJson extends SpeakeasyBase {
    error?: Hpcer500ApplicationJsonErrorEnum;
    errorDescription?: Hpcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hpcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Hpcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Hpcer502ApplicationJson extends SpeakeasyBase {
    error?: Hpcer502ApplicationJsonErrorEnum;
    errorDescription?: Hpcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hpcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Hpcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Hpcer503ApplicationJson extends SpeakeasyBase {
    error?: Hpcer503ApplicationJsonErrorEnum;
    errorDescription?: Hpcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hpcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Hpcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Hpcer504ApplicationJson extends SpeakeasyBase {
    error?: Hpcer504ApplicationJsonErrorEnum;
    errorDescription?: Hpcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class HpcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    hpcer400ApplicationJsonObject?: Hpcer400ApplicationJson;
    hpcer401ApplicationJsonObject?: Hpcer401ApplicationJson;
    hpcer404ApplicationJsonObject?: Hpcer404ApplicationJson;
    hpcer500ApplicationJsonObject?: Hpcer500ApplicationJson;
    hpcer502ApplicationJsonObject?: Hpcer502ApplicationJson;
    hpcer503ApplicationJsonObject?: Hpcer503ApplicationJson;
    hpcer504ApplicationJsonObject?: Hpcer504ApplicationJson;
}
