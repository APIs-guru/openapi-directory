import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PrfndRequestBodyCertificateParameters extends SpeakeasyBase {
    acNo: string;
    dob: string;
}
export declare enum PrfndRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class PrfndRequestBody extends SpeakeasyBase {
    certificateParameters?: PrfndRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: PrfndRequestBodyFormatEnum;
    txnId: string;
}
export declare class PrfndSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class PrfndRequest extends SpeakeasyBase {
    request?: PrfndRequestBody;
    security: PrfndSecurity;
}
export declare enum Prfnd400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Prfnd400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Prfnd400ApplicationJson extends SpeakeasyBase {
    error?: Prfnd400ApplicationJsonErrorEnum;
    errorDescription?: Prfnd400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Prfnd401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Prfnd401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Prfnd401ApplicationJson extends SpeakeasyBase {
    error?: Prfnd401ApplicationJsonErrorEnum;
    errorDescription?: Prfnd401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Prfnd404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Prfnd404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Prfnd404ApplicationJson extends SpeakeasyBase {
    error?: Prfnd404ApplicationJsonErrorEnum;
    errorDescription?: Prfnd404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Prfnd500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Prfnd500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Prfnd500ApplicationJson extends SpeakeasyBase {
    error?: Prfnd500ApplicationJsonErrorEnum;
    errorDescription?: Prfnd500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Prfnd502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Prfnd502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Prfnd502ApplicationJson extends SpeakeasyBase {
    error?: Prfnd502ApplicationJsonErrorEnum;
    errorDescription?: Prfnd502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Prfnd503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Prfnd503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Prfnd503ApplicationJson extends SpeakeasyBase {
    error?: Prfnd503ApplicationJsonErrorEnum;
    errorDescription?: Prfnd503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Prfnd504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Prfnd504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Prfnd504ApplicationJson extends SpeakeasyBase {
    error?: Prfnd504ApplicationJsonErrorEnum;
    errorDescription?: Prfnd504ApplicationJsonErrorDescriptionEnum;
}
export declare class PrfndResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    prfnd400ApplicationJsonObject?: Prfnd400ApplicationJson;
    prfnd401ApplicationJsonObject?: Prfnd401ApplicationJson;
    prfnd404ApplicationJsonObject?: Prfnd404ApplicationJson;
    prfnd500ApplicationJsonObject?: Prfnd500ApplicationJson;
    prfnd502ApplicationJsonObject?: Prfnd502ApplicationJson;
    prfnd503ApplicationJsonObject?: Prfnd503ApplicationJson;
    prfnd504ApplicationJsonObject?: Prfnd504ApplicationJson;
}
