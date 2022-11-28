import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTemplatesQueryParams extends SpeakeasyBase {
    page?: number;
    parentFolderId?: string;
    perPage?: number;
    query?: string;
}
export declare class ListTemplatesSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare enum ListTemplatesTemplateExpirationIntervalEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days"
}
export declare class ListTemplatesTemplate extends SpeakeasyBase {
    allowAdditionalProperties: boolean;
    description: string;
    documentUrl?: string;
    editableSubmissions: boolean;
    expirationInterval?: ListTemplatesTemplateExpirationIntervalEnum;
    expireAfter?: number;
    expireSubmissions: boolean;
    id: string;
    locked: boolean;
    name: string;
    pageDimensions?: number[][];
    parentFolderId?: string;
    path?: string;
    permanentDocumentUrl?: string;
    publicSubmissions: boolean;
    publicWebForm: boolean;
    redirectUrl: string;
    slackWebhookUrl: string;
    templateType: string;
    webhookUrl: string;
}
export declare class ListTemplatesRequest extends SpeakeasyBase {
    queryParams: ListTemplatesQueryParams;
    security: ListTemplatesSecurity;
}
export declare class ListTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    error?: shared.Error;
    templates?: ListTemplatesTemplate[];
}
