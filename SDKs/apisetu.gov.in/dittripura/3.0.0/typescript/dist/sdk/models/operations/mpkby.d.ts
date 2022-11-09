import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MpkbyRequestBodyCertificateParameters extends SpeakeasyBase {
    refNo: string;
    tokenNo: string;
}
export declare enum MpkbyRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class MpkbyRequestBody extends SpeakeasyBase {
    certificateParameters?: MpkbyRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: MpkbyRequestBodyFormatEnum;
    txnId: string;
}
export declare class MpkbySecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class MpkbyRequest extends SpeakeasyBase {
    request?: MpkbyRequestBody;
    security: MpkbySecurity;
}
export declare enum Mpkby400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Mpkby400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Mpkby400ApplicationJson extends SpeakeasyBase {
    error?: Mpkby400ApplicationJsonErrorEnum;
    errorDescription?: Mpkby400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mpkby401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Mpkby401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Mpkby401ApplicationJson extends SpeakeasyBase {
    error?: Mpkby401ApplicationJsonErrorEnum;
    errorDescription?: Mpkby401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mpkby404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Mpkby404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Mpkby404ApplicationJson extends SpeakeasyBase {
    error?: Mpkby404ApplicationJsonErrorEnum;
    errorDescription?: Mpkby404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mpkby500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Mpkby500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Mpkby500ApplicationJson extends SpeakeasyBase {
    error?: Mpkby500ApplicationJsonErrorEnum;
    errorDescription?: Mpkby500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mpkby502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Mpkby502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Mpkby502ApplicationJson extends SpeakeasyBase {
    error?: Mpkby502ApplicationJsonErrorEnum;
    errorDescription?: Mpkby502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mpkby503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Mpkby503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Mpkby503ApplicationJson extends SpeakeasyBase {
    error?: Mpkby503ApplicationJsonErrorEnum;
    errorDescription?: Mpkby503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mpkby504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Mpkby504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Mpkby504ApplicationJson extends SpeakeasyBase {
    error?: Mpkby504ApplicationJsonErrorEnum;
    errorDescription?: Mpkby504ApplicationJsonErrorDescriptionEnum;
}
export declare class MpkbyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mpkby400ApplicationJsonObject?: Mpkby400ApplicationJson;
    mpkby401ApplicationJsonObject?: Mpkby401ApplicationJson;
    mpkby404ApplicationJsonObject?: Mpkby404ApplicationJson;
    mpkby500ApplicationJsonObject?: Mpkby500ApplicationJson;
    mpkby502ApplicationJsonObject?: Mpkby502ApplicationJson;
    mpkby503ApplicationJsonObject?: Mpkby503ApplicationJson;
    mpkby504ApplicationJsonObject?: Mpkby504ApplicationJson;
}
