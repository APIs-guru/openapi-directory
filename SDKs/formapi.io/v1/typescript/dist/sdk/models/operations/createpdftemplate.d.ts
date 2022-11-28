import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePdfTemplateRequestBodyTemplateDocument extends SpeakeasyBase {
    content: Uint8Array;
    templateDocument: string;
}
export declare class CreatePdfTemplateRequestBody extends SpeakeasyBase {
    templateDocument: CreatePdfTemplateRequestBodyTemplateDocument;
    templateName: string;
    templateParentFolderId?: string;
}
export declare class CreatePdfTemplateSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare enum CreatePdfTemplatePendingTemplateExpirationIntervalEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days"
}
export declare class CreatePdfTemplatePendingTemplate extends SpeakeasyBase {
    allowAdditionalProperties: boolean;
    description: string;
    editableSubmissions: boolean;
    expirationInterval?: CreatePdfTemplatePendingTemplateExpirationIntervalEnum;
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
export declare class CreatePdfTemplateRequest extends SpeakeasyBase {
    request: CreatePdfTemplateRequestBody;
    security: CreatePdfTemplateSecurity;
}
export declare class CreatePdfTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    pendingTemplate?: CreatePdfTemplatePendingTemplate;
}
