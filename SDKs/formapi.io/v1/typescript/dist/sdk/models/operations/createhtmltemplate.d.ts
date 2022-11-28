import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataExpirationIntervalEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days"
}
export declare enum CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataTemplateTypeEnum {
    Pdf = "pdf",
    Html = "html"
}
export declare class CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData extends SpeakeasyBase {
    allowAdditionalProperties?: boolean;
    description?: string;
    editableSubmissions?: boolean;
    expirationInterval?: CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataExpirationIntervalEnum;
    expireAfter?: number;
    expireSubmissions?: boolean;
    footerHtml?: string;
    headerHtml?: string;
    html?: string;
    name: string;
    publicSubmissions?: boolean;
    publicWebForm?: boolean;
    redirectUrl?: string;
    scss?: string;
    slackWebhookUrl?: string;
    templateType?: CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataTemplateTypeEnum;
    webhookUrl?: string;
}
export declare class CreateHtmlTemplateCreateHtmlTemplateData extends SpeakeasyBase {
    template: CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData;
}
export declare class CreateHtmlTemplateSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare enum CreateHtmlTemplatePendingTemplateExpirationIntervalEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days"
}
export declare class CreateHtmlTemplatePendingTemplate extends SpeakeasyBase {
    allowAdditionalProperties: boolean;
    description: string;
    editableSubmissions: boolean;
    expirationInterval?: CreateHtmlTemplatePendingTemplateExpirationIntervalEnum;
    expireAfter?: number;
    expireSubmissions: boolean;
    id: string;
    locked: boolean;
    name: string;
    parentFolderId?: string;
    path?: string;
    publicSubmissions: boolean;
    publicWebForm: boolean;
    redirectUrl: string;
    slackWebhookUrl: string;
    templateType: string;
    webhookUrl: string;
}
export declare class CreateHtmlTemplateRequest extends SpeakeasyBase {
    request: CreateHtmlTemplateCreateHtmlTemplateData;
    security: CreateHtmlTemplateSecurity;
}
export declare class CreateHtmlTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    pendingTemplate?: CreateHtmlTemplatePendingTemplate;
}
