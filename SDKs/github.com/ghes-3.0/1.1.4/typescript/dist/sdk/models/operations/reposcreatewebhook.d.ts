import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposCreateWebhookPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
/**
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#create-hook-config-params).
**/
export declare class ReposCreateWebhookRequestBodyConfig extends SpeakeasyBase {
    contentType?: string;
    digest?: string;
    insecureSsl?: any;
    secret?: string;
    token?: string;
    url?: string;
}
export declare class ReposCreateWebhookRequestBody extends SpeakeasyBase {
    active?: boolean;
    config?: ReposCreateWebhookRequestBodyConfig;
    events?: string[];
    name?: string;
}
export declare class ReposCreateWebhookRequest extends SpeakeasyBase {
    pathParams: ReposCreateWebhookPathParams;
    request?: ReposCreateWebhookRequestBody;
}
export declare class ReposCreateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    hook?: shared.Hook;
    validationError?: shared.ValidationError;
}
