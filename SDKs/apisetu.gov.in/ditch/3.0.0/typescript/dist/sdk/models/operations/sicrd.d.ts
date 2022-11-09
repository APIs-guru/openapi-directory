import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SicrdRequestBodyCertificateParameters extends SpeakeasyBase {
    certno: string;
    dob: string;
}
export declare enum SicrdRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class SicrdRequestBody extends SpeakeasyBase {
    certificateParameters?: SicrdRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: SicrdRequestBodyFormatEnum;
    txnId: string;
}
export declare class SicrdSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class SicrdRequest extends SpeakeasyBase {
    request?: SicrdRequestBody;
    security: SicrdSecurity;
}
export declare enum Sicrd400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Sicrd400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Sicrd400ApplicationJson extends SpeakeasyBase {
    error?: Sicrd400ApplicationJsonErrorEnum;
    errorDescription?: Sicrd400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sicrd401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Sicrd401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Sicrd401ApplicationJson extends SpeakeasyBase {
    error?: Sicrd401ApplicationJsonErrorEnum;
    errorDescription?: Sicrd401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sicrd404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Sicrd404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Sicrd404ApplicationJson extends SpeakeasyBase {
    error?: Sicrd404ApplicationJsonErrorEnum;
    errorDescription?: Sicrd404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sicrd500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Sicrd500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Sicrd500ApplicationJson extends SpeakeasyBase {
    error?: Sicrd500ApplicationJsonErrorEnum;
    errorDescription?: Sicrd500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sicrd502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Sicrd502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Sicrd502ApplicationJson extends SpeakeasyBase {
    error?: Sicrd502ApplicationJsonErrorEnum;
    errorDescription?: Sicrd502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sicrd503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Sicrd503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Sicrd503ApplicationJson extends SpeakeasyBase {
    error?: Sicrd503ApplicationJsonErrorEnum;
    errorDescription?: Sicrd503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sicrd504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Sicrd504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Sicrd504ApplicationJson extends SpeakeasyBase {
    error?: Sicrd504ApplicationJsonErrorEnum;
    errorDescription?: Sicrd504ApplicationJsonErrorDescriptionEnum;
}
export declare class SicrdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sicrd400ApplicationJsonObject?: Sicrd400ApplicationJson;
    sicrd401ApplicationJsonObject?: Sicrd401ApplicationJson;
    sicrd404ApplicationJsonObject?: Sicrd404ApplicationJson;
    sicrd500ApplicationJsonObject?: Sicrd500ApplicationJson;
    sicrd502ApplicationJsonObject?: Sicrd502ApplicationJson;
    sicrd503ApplicationJsonObject?: Sicrd503ApplicationJson;
    sicrd504ApplicationJsonObject?: Sicrd504ApplicationJson;
}
