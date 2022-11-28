import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposUpdateWebhookPathParams extends SpeakeasyBase {
    hookId: number;
    owner: string;
    repo: string;
}
/**
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@3.1/rest/reference/repos#create-hook-config-params).
**/
export declare class ReposUpdateWebhookRequestBodyConfig extends SpeakeasyBase {
    address?: string;
    contentType?: string;
    insecureSsl?: any;
    room?: string;
    secret?: string;
    url: string;
}
export declare class ReposUpdateWebhookRequestBody extends SpeakeasyBase {
    active?: boolean;
    addEvents?: string[];
    config?: ReposUpdateWebhookRequestBodyConfig;
    events?: string[];
    removeEvents?: string[];
}
export declare class ReposUpdateWebhookRequest extends SpeakeasyBase {
    pathParams: ReposUpdateWebhookPathParams;
    request?: ReposUpdateWebhookRequestBody;
}
export declare class ReposUpdateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    hook?: shared.Hook;
    validationError?: shared.ValidationError;
}
