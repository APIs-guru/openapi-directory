import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PvcerRequestBodyCertificateParameters extends SpeakeasyBase {
    enrolNo: string;
    fullName: string;
    year: string;
}
export declare enum PvcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class PvcerRequestBody extends SpeakeasyBase {
    certificateParameters?: PvcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: PvcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class PvcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class PvcerRequest extends SpeakeasyBase {
    request?: PvcerRequestBody;
    security: PvcerSecurity;
}
export declare enum Pvcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Pvcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Pvcer400ApplicationJson extends SpeakeasyBase {
    error?: Pvcer400ApplicationJsonErrorEnum;
    errorDescription?: Pvcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pvcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Pvcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Pvcer401ApplicationJson extends SpeakeasyBase {
    error?: Pvcer401ApplicationJsonErrorEnum;
    errorDescription?: Pvcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pvcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Pvcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Pvcer404ApplicationJson extends SpeakeasyBase {
    error?: Pvcer404ApplicationJsonErrorEnum;
    errorDescription?: Pvcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pvcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Pvcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Pvcer500ApplicationJson extends SpeakeasyBase {
    error?: Pvcer500ApplicationJsonErrorEnum;
    errorDescription?: Pvcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pvcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Pvcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Pvcer502ApplicationJson extends SpeakeasyBase {
    error?: Pvcer502ApplicationJsonErrorEnum;
    errorDescription?: Pvcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pvcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Pvcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Pvcer503ApplicationJson extends SpeakeasyBase {
    error?: Pvcer503ApplicationJsonErrorEnum;
    errorDescription?: Pvcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pvcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Pvcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Pvcer504ApplicationJson extends SpeakeasyBase {
    error?: Pvcer504ApplicationJsonErrorEnum;
    errorDescription?: Pvcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class PvcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pvcer400ApplicationJsonObject?: Pvcer400ApplicationJson;
    pvcer401ApplicationJsonObject?: Pvcer401ApplicationJson;
    pvcer404ApplicationJsonObject?: Pvcer404ApplicationJson;
    pvcer500ApplicationJsonObject?: Pvcer500ApplicationJson;
    pvcer502ApplicationJsonObject?: Pvcer502ApplicationJson;
    pvcer503ApplicationJsonObject?: Pvcer503ApplicationJson;
    pvcer504ApplicationJsonObject?: Pvcer504ApplicationJson;
}
