import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BacerRequestBodyCertificateParameters extends SpeakeasyBase {
    name: string;
    refNo: string;
}
export declare enum BacerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class BacerRequestBody extends SpeakeasyBase {
    certificateParameters?: BacerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: BacerRequestBodyFormatEnum;
    txnId: string;
}
export declare class BacerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class BacerRequest extends SpeakeasyBase {
    request?: BacerRequestBody;
    security: BacerSecurity;
}
export declare enum Bacer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Bacer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Bacer400ApplicationJson extends SpeakeasyBase {
    error?: Bacer400ApplicationJsonErrorEnum;
    errorDescription?: Bacer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bacer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Bacer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Bacer401ApplicationJson extends SpeakeasyBase {
    error?: Bacer401ApplicationJsonErrorEnum;
    errorDescription?: Bacer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bacer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Bacer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Bacer404ApplicationJson extends SpeakeasyBase {
    error?: Bacer404ApplicationJsonErrorEnum;
    errorDescription?: Bacer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bacer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Bacer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Bacer500ApplicationJson extends SpeakeasyBase {
    error?: Bacer500ApplicationJsonErrorEnum;
    errorDescription?: Bacer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bacer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Bacer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Bacer502ApplicationJson extends SpeakeasyBase {
    error?: Bacer502ApplicationJsonErrorEnum;
    errorDescription?: Bacer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bacer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Bacer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Bacer503ApplicationJson extends SpeakeasyBase {
    error?: Bacer503ApplicationJsonErrorEnum;
    errorDescription?: Bacer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bacer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Bacer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Bacer504ApplicationJson extends SpeakeasyBase {
    error?: Bacer504ApplicationJsonErrorEnum;
    errorDescription?: Bacer504ApplicationJsonErrorDescriptionEnum;
}
export declare class BacerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bacer400ApplicationJsonObject?: Bacer400ApplicationJson;
    bacer401ApplicationJsonObject?: Bacer401ApplicationJson;
    bacer404ApplicationJsonObject?: Bacer404ApplicationJson;
    bacer500ApplicationJsonObject?: Bacer500ApplicationJson;
    bacer502ApplicationJsonObject?: Bacer502ApplicationJson;
    bacer503ApplicationJsonObject?: Bacer503ApplicationJson;
    bacer504ApplicationJsonObject?: Bacer504ApplicationJson;
}
