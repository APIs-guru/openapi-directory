import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsUpdateWebhookPathParams extends SpeakeasyBase {
    hookId: number;
    org: string;
}
/**
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/orgs#update-hook-config-params).
**/
export declare class OrgsUpdateWebhookRequestBodyConfig extends SpeakeasyBase {
    contentType?: string;
    insecureSsl?: string;
    secret?: string;
    url: string;
}
export declare class OrgsUpdateWebhookRequestBody extends SpeakeasyBase {
    active?: boolean;
    config?: OrgsUpdateWebhookRequestBodyConfig;
    events?: string[];
    name?: string;
}
export declare class OrgsUpdateWebhookRequest extends SpeakeasyBase {
    pathParams: OrgsUpdateWebhookPathParams;
    request?: OrgsUpdateWebhookRequestBody;
}
export declare class OrgsUpdateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    orgHook?: shared.OrgHook;
    validationError?: shared.ValidationError;
}
