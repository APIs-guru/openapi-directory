import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImporterExporterCodeVerificationApiPathParams extends SpeakeasyBase {
    iec: string;
}
export declare class ImporterExporterCodeVerificationApiSecurity extends SpeakeasyBase {
    apiKey?: shared.SchemeApiKey;
    clientId?: shared.SchemeClientId;
}
export declare class ImporterExporterCodeVerificationApi200ApplicationJson extends SpeakeasyBase {
    addressLine1: string;
    addressLine2: string;
    branch: any[];
    city: string;
    dataAsOn: Date;
    directors: any[];
    entityName: string;
    exporterType: string;
    iec: string;
    iecIssueDate: string;
    iecModificationDate: string;
    iecStatus: string;
    natureOfConcern: string;
    pan: string;
    pin: string;
    state: string;
}
export declare enum ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum {
    InvalidParameter = "invalid parameter",
    MissingParameter = "missing parameter"
}
export declare enum ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum {
    BadRequest = "Bad request",
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters."
}
export declare class ImporterExporterCodeVerificationApi400ApplicationJson extends SpeakeasyBase {
    error?: ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum;
    errorDescription?: ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum;
}
export declare enum ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class ImporterExporterCodeVerificationApi401ApplicationJson extends SpeakeasyBase {
    error?: ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum;
    errorDescription?: ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum;
}
export declare enum ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "Url not found"
}
export declare enum ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect."
}
export declare class ImporterExporterCodeVerificationApi404ApplicationJson extends SpeakeasyBase {
    error?: ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum;
    errorDescription?: ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum;
}
export declare enum ImporterExporterCodeVerificationApi500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum ImporterExporterCodeVerificationApi500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class ImporterExporterCodeVerificationApi500ApplicationJson extends SpeakeasyBase {
    error?: ImporterExporterCodeVerificationApi500ApplicationJsonErrorEnum;
    errorDescription?: ImporterExporterCodeVerificationApi500ApplicationJsonErrorDescriptionEnum;
}
export declare enum ImporterExporterCodeVerificationApi502ApplicationJsonErrorEnum {
    BadGateway = "bad gateway"
}
export declare enum ImporterExporterCodeVerificationApi502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response."
}
export declare class ImporterExporterCodeVerificationApi502ApplicationJson extends SpeakeasyBase {
    error?: ImporterExporterCodeVerificationApi502ApplicationJsonErrorEnum;
    errorDescription?: ImporterExporterCodeVerificationApi502ApplicationJsonErrorDescriptionEnum;
}
export declare enum ImporterExporterCodeVerificationApi503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum ImporterExporterCodeVerificationApi503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class ImporterExporterCodeVerificationApi503ApplicationJson extends SpeakeasyBase {
    error?: ImporterExporterCodeVerificationApi503ApplicationJsonErrorEnum;
    errorDescription?: ImporterExporterCodeVerificationApi503ApplicationJsonErrorDescriptionEnum;
}
export declare enum ImporterExporterCodeVerificationApi504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum ImporterExporterCodeVerificationApi504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class ImporterExporterCodeVerificationApi504ApplicationJson extends SpeakeasyBase {
    error?: ImporterExporterCodeVerificationApi504ApplicationJsonErrorEnum;
    errorDescription?: ImporterExporterCodeVerificationApi504ApplicationJsonErrorDescriptionEnum;
}
export declare class ImporterExporterCodeVerificationApiRequest extends SpeakeasyBase {
    pathParams: ImporterExporterCodeVerificationApiPathParams;
    security: ImporterExporterCodeVerificationApiSecurity;
}
export declare class ImporterExporterCodeVerificationApiResponse extends SpeakeasyBase {
    contentType: string;
    importerExporterCodeVerificationApi200ApplicationJsonObject?: ImporterExporterCodeVerificationApi200ApplicationJson;
    importerExporterCodeVerificationApi400ApplicationJsonObject?: ImporterExporterCodeVerificationApi400ApplicationJson;
    importerExporterCodeVerificationApi401ApplicationJsonObject?: ImporterExporterCodeVerificationApi401ApplicationJson;
    importerExporterCodeVerificationApi404ApplicationJsonObject?: ImporterExporterCodeVerificationApi404ApplicationJson;
    importerExporterCodeVerificationApi500ApplicationJsonObject?: ImporterExporterCodeVerificationApi500ApplicationJson;
    importerExporterCodeVerificationApi502ApplicationJsonObject?: ImporterExporterCodeVerificationApi502ApplicationJson;
    importerExporterCodeVerificationApi503ApplicationJsonObject?: ImporterExporterCodeVerificationApi503ApplicationJson;
    importerExporterCodeVerificationApi504ApplicationJsonObject?: ImporterExporterCodeVerificationApi504ApplicationJson;
    statusCode: number;
}
