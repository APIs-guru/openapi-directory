import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTemplatePathParams extends SpeakeasyBase {
    templateId: string;
}
export declare class GetTemplateSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare enum GetTemplateTemplateExpirationIntervalEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days"
}
export declare class GetTemplateTemplate extends SpeakeasyBase {
    allowAdditionalProperties: boolean;
    description: string;
    documentUrl?: string;
    editableSubmissions: boolean;
    expirationInterval?: GetTemplateTemplateExpirationIntervalEnum;
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
export declare class GetTemplateRequest extends SpeakeasyBase {
    pathParams: GetTemplatePathParams;
    security: GetTemplateSecurity;
}
export declare class GetTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    error?: shared.Error;
    template?: GetTemplateTemplate;
}
