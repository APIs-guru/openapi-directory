import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RfcerRequestBodyCertificateParameters extends SpeakeasyBase {
    certType: string;
    companyName: string;
    regNo: string;
    sector: string;
}
export declare enum RfcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class RfcerRequestBody extends SpeakeasyBase {
    certificateParameters?: RfcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: RfcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class RfcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class RfcerRequest extends SpeakeasyBase {
    request?: RfcerRequestBody;
    security: RfcerSecurity;
}
export declare enum Rfcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Rfcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Rfcer400ApplicationJson extends SpeakeasyBase {
    error?: Rfcer400ApplicationJsonErrorEnum;
    errorDescription?: Rfcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rfcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Rfcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Rfcer401ApplicationJson extends SpeakeasyBase {
    error?: Rfcer401ApplicationJsonErrorEnum;
    errorDescription?: Rfcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rfcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Rfcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Rfcer404ApplicationJson extends SpeakeasyBase {
    error?: Rfcer404ApplicationJsonErrorEnum;
    errorDescription?: Rfcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rfcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Rfcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Rfcer500ApplicationJson extends SpeakeasyBase {
    error?: Rfcer500ApplicationJsonErrorEnum;
    errorDescription?: Rfcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rfcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Rfcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Rfcer502ApplicationJson extends SpeakeasyBase {
    error?: Rfcer502ApplicationJsonErrorEnum;
    errorDescription?: Rfcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rfcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Rfcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Rfcer503ApplicationJson extends SpeakeasyBase {
    error?: Rfcer503ApplicationJsonErrorEnum;
    errorDescription?: Rfcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rfcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Rfcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Rfcer504ApplicationJson extends SpeakeasyBase {
    error?: Rfcer504ApplicationJsonErrorEnum;
    errorDescription?: Rfcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class RfcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rfcer400ApplicationJsonObject?: Rfcer400ApplicationJson;
    rfcer401ApplicationJsonObject?: Rfcer401ApplicationJson;
    rfcer404ApplicationJsonObject?: Rfcer404ApplicationJson;
    rfcer500ApplicationJsonObject?: Rfcer500ApplicationJson;
    rfcer502ApplicationJsonObject?: Rfcer502ApplicationJson;
    rfcer503ApplicationJsonObject?: Rfcer503ApplicationJson;
    rfcer504ApplicationJsonObject?: Rfcer504ApplicationJson;
}
