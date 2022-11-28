import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTemplatePathParams extends SpeakeasyBase {
    templateId: string;
}
export declare enum UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days"
}
export declare class UpdateTemplateUpdateTemplateDataTemplateData extends SpeakeasyBase {
    allowAdditionalProperties?: boolean;
    description?: string;
    editableSubmissions?: boolean;
    expirationInterval?: UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum;
    expireAfter?: number;
    expireSubmissions?: boolean;
    footerHtml?: string;
    headerHtml?: string;
    html?: string;
    name?: string;
    publicSubmissions?: boolean;
    publicWebForm?: boolean;
    redirectUrl?: string;
    scss?: string;
    slackWebhookUrl?: string;
    webhookUrl?: string;
}
export declare class UpdateTemplateUpdateTemplateData extends SpeakeasyBase {
    template: UpdateTemplateUpdateTemplateDataTemplateData;
}
export declare class UpdateTemplateSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare enum UpdateTemplateUpdateTemplateResponseStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class UpdateTemplateUpdateTemplateResponse extends SpeakeasyBase {
    errors?: string[];
    status: UpdateTemplateUpdateTemplateResponseStatusEnum;
}
export declare class UpdateTemplateRequest extends SpeakeasyBase {
    pathParams: UpdateTemplatePathParams;
    request: UpdateTemplateUpdateTemplateData;
    security: UpdateTemplateSecurity;
}
export declare class UpdateTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateTemplateResponse?: UpdateTemplateUpdateTemplateResponse;
}
