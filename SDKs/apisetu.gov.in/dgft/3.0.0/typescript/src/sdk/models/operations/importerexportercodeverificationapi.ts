import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImporterExporterCodeVerificationApiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=iec" })
  iec: string;
}


export class ImporterExporterCodeVerificationApiSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ImporterExporterCodeVerificationApiSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class ImporterExporterCodeVerificationApiSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ImporterExporterCodeVerificationApiSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ImporterExporterCodeVerificationApiSecurityOption2;
}


export class ImporterExporterCodeVerificationApiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ImporterExporterCodeVerificationApiPathParams;

  @Metadata()
  security: ImporterExporterCodeVerificationApiSecurity;
}


export class ImporterExporterCodeVerificationApi200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=addressLine1" })
  addressLine1: string;

  @Metadata({ data: "json, name=addressLine2" })
  addressLine2: string;

  @Metadata({ data: "json, name=branch" })
  branch: any[];

  @Metadata({ data: "json, name=city" })
  city: string;

  @Metadata({ data: "json, name=dataAsOn" })
  dataAsOn: Date;

  @Metadata({ data: "json, name=directors" })
  directors: any[];

  @Metadata({ data: "json, name=entityName" })
  entityName: string;

  @Metadata({ data: "json, name=exporterType" })
  exporterType: string;

  @Metadata({ data: "json, name=iec" })
  iec: string;

  @Metadata({ data: "json, name=iecIssueDate" })
  iecIssueDate: string;

  @Metadata({ data: "json, name=iecModificationDate" })
  iecModificationDate: string;

  @Metadata({ data: "json, name=iecStatus" })
  iecStatus: string;

  @Metadata({ data: "json, name=natureOfConcern" })
  natureOfConcern: string;

  @Metadata({ data: "json, name=pan" })
  pan: string;

  @Metadata({ data: "json, name=pin" })
  pin: string;

  @Metadata({ data: "json, name=state" })
  state: string;
}

export enum ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum {
    InvalidParameter = "invalid parameter"
,    MissingParameter = "missing parameter"
}

export enum ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum {
    BadRequest = "Bad request"
,    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters."
}


export class ImporterExporterCodeVerificationApi400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum;
}

export enum ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class ImporterExporterCodeVerificationApi401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum;
}

export enum ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "Url not found"
}

export enum ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect."
}


export class ImporterExporterCodeVerificationApi404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum;
}

export enum ImporterExporterCodeVerificationApi500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum ImporterExporterCodeVerificationApi500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class ImporterExporterCodeVerificationApi500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: ImporterExporterCodeVerificationApi500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: ImporterExporterCodeVerificationApi500ApplicationJsonErrorDescriptionEnum;
}

export enum ImporterExporterCodeVerificationApi502ApplicationJsonErrorEnum {
    BadGateway = "bad gateway"
}

export enum ImporterExporterCodeVerificationApi502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response."
}


export class ImporterExporterCodeVerificationApi502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: ImporterExporterCodeVerificationApi502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: ImporterExporterCodeVerificationApi502ApplicationJsonErrorDescriptionEnum;
}

export enum ImporterExporterCodeVerificationApi503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum ImporterExporterCodeVerificationApi503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class ImporterExporterCodeVerificationApi503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: ImporterExporterCodeVerificationApi503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: ImporterExporterCodeVerificationApi503ApplicationJsonErrorDescriptionEnum;
}

export enum ImporterExporterCodeVerificationApi504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum ImporterExporterCodeVerificationApi504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class ImporterExporterCodeVerificationApi504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: ImporterExporterCodeVerificationApi504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: ImporterExporterCodeVerificationApi504ApplicationJsonErrorDescriptionEnum;
}


export class ImporterExporterCodeVerificationApiResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  importerExporterCodeVerificationApi200ApplicationJsonObject?: ImporterExporterCodeVerificationApi200ApplicationJson;

  @Metadata()
  importerExporterCodeVerificationApi400ApplicationJsonObject?: ImporterExporterCodeVerificationApi400ApplicationJson;

  @Metadata()
  importerExporterCodeVerificationApi401ApplicationJsonObject?: ImporterExporterCodeVerificationApi401ApplicationJson;

  @Metadata()
  importerExporterCodeVerificationApi404ApplicationJsonObject?: ImporterExporterCodeVerificationApi404ApplicationJson;

  @Metadata()
  importerExporterCodeVerificationApi500ApplicationJsonObject?: ImporterExporterCodeVerificationApi500ApplicationJson;

  @Metadata()
  importerExporterCodeVerificationApi502ApplicationJsonObject?: ImporterExporterCodeVerificationApi502ApplicationJson;

  @Metadata()
  importerExporterCodeVerificationApi503ApplicationJsonObject?: ImporterExporterCodeVerificationApi503ApplicationJson;

  @Metadata()
  importerExporterCodeVerificationApi504ApplicationJsonObject?: ImporterExporterCodeVerificationApi504ApplicationJson;

  @Metadata()
  statusCode: number;
}
