import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BpcrdRequestBodyCertificateParameters extends SpeakeasyBase {
    udf1: string;
}
export declare enum BpcrdRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class BpcrdRequestBody extends SpeakeasyBase {
    certificateParameters?: BpcrdRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: BpcrdRequestBodyFormatEnum;
    txnId: string;
}
export declare class BpcrdSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Bpcrd400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Bpcrd400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Bpcrd400ApplicationJson extends SpeakeasyBase {
    error?: Bpcrd400ApplicationJsonErrorEnum;
    errorDescription?: Bpcrd400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bpcrd401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Bpcrd401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Bpcrd401ApplicationJson extends SpeakeasyBase {
    error?: Bpcrd401ApplicationJsonErrorEnum;
    errorDescription?: Bpcrd401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bpcrd404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Bpcrd404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Bpcrd404ApplicationJson extends SpeakeasyBase {
    error?: Bpcrd404ApplicationJsonErrorEnum;
    errorDescription?: Bpcrd404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bpcrd500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Bpcrd500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Bpcrd500ApplicationJson extends SpeakeasyBase {
    error?: Bpcrd500ApplicationJsonErrorEnum;
    errorDescription?: Bpcrd500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bpcrd502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Bpcrd502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Bpcrd502ApplicationJson extends SpeakeasyBase {
    error?: Bpcrd502ApplicationJsonErrorEnum;
    errorDescription?: Bpcrd502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bpcrd503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Bpcrd503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Bpcrd503ApplicationJson extends SpeakeasyBase {
    error?: Bpcrd503ApplicationJsonErrorEnum;
    errorDescription?: Bpcrd503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Bpcrd504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Bpcrd504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Bpcrd504ApplicationJson extends SpeakeasyBase {
    error?: Bpcrd504ApplicationJsonErrorEnum;
    errorDescription?: Bpcrd504ApplicationJsonErrorDescriptionEnum;
}
export declare class BpcrdRequest extends SpeakeasyBase {
    request?: BpcrdRequestBody;
    security: BpcrdSecurity;
}
export declare class BpcrdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bpcrd400ApplicationJsonObject?: Bpcrd400ApplicationJson;
    bpcrd401ApplicationJsonObject?: Bpcrd401ApplicationJson;
    bpcrd404ApplicationJsonObject?: Bpcrd404ApplicationJson;
    bpcrd500ApplicationJsonObject?: Bpcrd500ApplicationJson;
    bpcrd502ApplicationJsonObject?: Bpcrd502ApplicationJson;
    bpcrd503ApplicationJsonObject?: Bpcrd503ApplicationJson;
    bpcrd504ApplicationJsonObject?: Bpcrd504ApplicationJson;
}
