import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CvipcRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    udf1: string;
    udf2: string;
    udf3: string;
}
export declare enum CvipcRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class CvipcRequestBody extends SpeakeasyBase {
    certificateParameters?: CvipcRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: CvipcRequestBodyFormatEnum;
    txnId: string;
}
export declare class CvipcSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class CvipcRequest extends SpeakeasyBase {
    request?: CvipcRequestBody;
    security: CvipcSecurity;
}
export declare enum Cvipc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cvipc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Cvipc400ApplicationJson extends SpeakeasyBase {
    error?: Cvipc400ApplicationJsonErrorEnum;
    errorDescription?: Cvipc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cvipc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cvipc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Cvipc401ApplicationJson extends SpeakeasyBase {
    error?: Cvipc401ApplicationJsonErrorEnum;
    errorDescription?: Cvipc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cvipc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cvipc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Cvipc404ApplicationJson extends SpeakeasyBase {
    error?: Cvipc404ApplicationJsonErrorEnum;
    errorDescription?: Cvipc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cvipc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cvipc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Cvipc500ApplicationJson extends SpeakeasyBase {
    error?: Cvipc500ApplicationJsonErrorEnum;
    errorDescription?: Cvipc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cvipc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cvipc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Cvipc502ApplicationJson extends SpeakeasyBase {
    error?: Cvipc502ApplicationJsonErrorEnum;
    errorDescription?: Cvipc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cvipc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cvipc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Cvipc503ApplicationJson extends SpeakeasyBase {
    error?: Cvipc503ApplicationJsonErrorEnum;
    errorDescription?: Cvipc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cvipc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cvipc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Cvipc504ApplicationJson extends SpeakeasyBase {
    error?: Cvipc504ApplicationJsonErrorEnum;
    errorDescription?: Cvipc504ApplicationJsonErrorDescriptionEnum;
}
export declare class CvipcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cvipc400ApplicationJsonObject?: Cvipc400ApplicationJson;
    cvipc401ApplicationJsonObject?: Cvipc401ApplicationJson;
    cvipc404ApplicationJsonObject?: Cvipc404ApplicationJson;
    cvipc500ApplicationJsonObject?: Cvipc500ApplicationJson;
    cvipc502ApplicationJsonObject?: Cvipc502ApplicationJson;
    cvipc503ApplicationJsonObject?: Cvipc503ApplicationJson;
    cvipc504ApplicationJsonObject?: Cvipc504ApplicationJson;
}
