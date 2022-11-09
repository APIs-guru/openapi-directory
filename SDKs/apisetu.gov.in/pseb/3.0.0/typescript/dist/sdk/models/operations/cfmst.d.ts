import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CfmstRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    uid: string;
    rollno: string;
    year: string;
}
export declare enum CfmstRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class CfmstRequestBody extends SpeakeasyBase {
    certificateParameters?: CfmstRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: CfmstRequestBodyFormatEnum;
    txnId: string;
}
export declare class CfmstSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class CfmstRequest extends SpeakeasyBase {
    request?: CfmstRequestBody;
    security: CfmstSecurity;
}
export declare enum Cfmst400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cfmst400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Cfmst400ApplicationJson extends SpeakeasyBase {
    error?: Cfmst400ApplicationJsonErrorEnum;
    errorDescription?: Cfmst400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cfmst401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cfmst401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Cfmst401ApplicationJson extends SpeakeasyBase {
    error?: Cfmst401ApplicationJsonErrorEnum;
    errorDescription?: Cfmst401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cfmst404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cfmst404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Cfmst404ApplicationJson extends SpeakeasyBase {
    error?: Cfmst404ApplicationJsonErrorEnum;
    errorDescription?: Cfmst404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cfmst500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cfmst500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Cfmst500ApplicationJson extends SpeakeasyBase {
    error?: Cfmst500ApplicationJsonErrorEnum;
    errorDescription?: Cfmst500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cfmst502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cfmst502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Cfmst502ApplicationJson extends SpeakeasyBase {
    error?: Cfmst502ApplicationJsonErrorEnum;
    errorDescription?: Cfmst502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cfmst503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cfmst503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Cfmst503ApplicationJson extends SpeakeasyBase {
    error?: Cfmst503ApplicationJsonErrorEnum;
    errorDescription?: Cfmst503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cfmst504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cfmst504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Cfmst504ApplicationJson extends SpeakeasyBase {
    error?: Cfmst504ApplicationJsonErrorEnum;
    errorDescription?: Cfmst504ApplicationJsonErrorDescriptionEnum;
}
export declare class CfmstResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cfmst400ApplicationJsonObject?: Cfmst400ApplicationJson;
    cfmst401ApplicationJsonObject?: Cfmst401ApplicationJson;
    cfmst404ApplicationJsonObject?: Cfmst404ApplicationJson;
    cfmst500ApplicationJsonObject?: Cfmst500ApplicationJson;
    cfmst502ApplicationJsonObject?: Cfmst502ApplicationJson;
    cfmst503ApplicationJsonObject?: Cfmst503ApplicationJson;
    cfmst504ApplicationJsonObject?: Cfmst504ApplicationJson;
}
