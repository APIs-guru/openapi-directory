import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CvcerRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    vcNo: string;
}
export declare enum CvcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class CvcerRequestBody extends SpeakeasyBase {
    certificateParameters?: CvcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: CvcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class CvcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Cvcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cvcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Cvcer400ApplicationJson extends SpeakeasyBase {
    error?: Cvcer400ApplicationJsonErrorEnum;
    errorDescription?: Cvcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cvcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cvcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Cvcer401ApplicationJson extends SpeakeasyBase {
    error?: Cvcer401ApplicationJsonErrorEnum;
    errorDescription?: Cvcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cvcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cvcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Cvcer404ApplicationJson extends SpeakeasyBase {
    error?: Cvcer404ApplicationJsonErrorEnum;
    errorDescription?: Cvcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cvcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cvcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Cvcer500ApplicationJson extends SpeakeasyBase {
    error?: Cvcer500ApplicationJsonErrorEnum;
    errorDescription?: Cvcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cvcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cvcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Cvcer502ApplicationJson extends SpeakeasyBase {
    error?: Cvcer502ApplicationJsonErrorEnum;
    errorDescription?: Cvcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cvcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cvcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Cvcer503ApplicationJson extends SpeakeasyBase {
    error?: Cvcer503ApplicationJsonErrorEnum;
    errorDescription?: Cvcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cvcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cvcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Cvcer504ApplicationJson extends SpeakeasyBase {
    error?: Cvcer504ApplicationJsonErrorEnum;
    errorDescription?: Cvcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class CvcerRequest extends SpeakeasyBase {
    request?: CvcerRequestBody;
    security: CvcerSecurity;
}
export declare class CvcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cvcer400ApplicationJsonObject?: Cvcer400ApplicationJson;
    cvcer401ApplicationJsonObject?: Cvcer401ApplicationJson;
    cvcer404ApplicationJsonObject?: Cvcer404ApplicationJson;
    cvcer500ApplicationJsonObject?: Cvcer500ApplicationJson;
    cvcer502ApplicationJsonObject?: Cvcer502ApplicationJson;
    cvcer503ApplicationJsonObject?: Cvcer503ApplicationJson;
    cvcer504ApplicationJsonObject?: Cvcer504ApplicationJson;
}
