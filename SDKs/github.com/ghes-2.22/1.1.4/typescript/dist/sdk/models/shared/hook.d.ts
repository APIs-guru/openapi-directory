import { SpeakeasyBase } from "../../../internal/utils";
import { HookResponse } from "./hookresponse";
export declare class HookConfig extends SpeakeasyBase {
    contentType?: string;
    digest?: string;
    email?: string;
    insecureSsl?: any;
    password?: string;
    room?: string;
    secret?: string;
    subdomain?: string;
    token?: string;
    url?: string;
}
/**
 * Webhooks for repositories.
**/
export declare class Hook extends SpeakeasyBase {
    active: boolean;
    config: HookConfig;
    createdAt: Date;
    events: string[];
    id: number;
    lastResponse: HookResponse;
    name: string;
    pingUrl: string;
    testUrl: string;
    type: string;
    updatedAt: Date;
    url: string;
}
