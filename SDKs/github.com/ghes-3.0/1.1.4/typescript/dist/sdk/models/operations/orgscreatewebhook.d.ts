import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsCreateWebhookPathParams extends SpeakeasyBase {
    org: string;
}
/**
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@3.0/rest/reference/orgs#create-hook-config-params).
**/
export declare class OrgsCreateWebhookRequestBodyConfig extends SpeakeasyBase {
    contentType?: string;
    insecureSsl?: any;
    password?: string;
    secret?: string;
    url: string;
    username?: string;
}
export declare class OrgsCreateWebhookRequestBody extends SpeakeasyBase {
    active?: boolean;
    config: OrgsCreateWebhookRequestBodyConfig;
    events?: string[];
    name: string;
}
export declare class OrgsCreateWebhookRequest extends SpeakeasyBase {
    pathParams: OrgsCreateWebhookPathParams;
    request?: OrgsCreateWebhookRequestBody;
}
export declare class OrgsCreateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    orgHook?: shared.OrgHook;
    validationError?: shared.ValidationError;
}
