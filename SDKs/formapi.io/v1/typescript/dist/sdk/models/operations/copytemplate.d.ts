import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CopyTemplatePathParams extends SpeakeasyBase {
    templateId: string;
}
export declare class CopyTemplateCopyTemplateData extends SpeakeasyBase {
    name?: string;
    parentFolderId: string;
}
export declare class CopyTemplateSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare enum CopyTemplateTemplateExpirationIntervalEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days"
}
export declare class CopyTemplateTemplate extends SpeakeasyBase {
    allowAdditionalProperties: boolean;
    description: string;
    documentUrl?: string;
    editableSubmissions: boolean;
    expirationInterval?: CopyTemplateTemplateExpirationIntervalEnum;
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
export declare class CopyTemplateRequest extends SpeakeasyBase {
    pathParams: CopyTemplatePathParams;
    request?: CopyTemplateCopyTemplateData;
    security: CopyTemplateSecurity;
}
export declare class CopyTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    template?: CopyTemplateTemplate;
}
