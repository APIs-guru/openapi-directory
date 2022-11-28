import { SpeakeasyBase } from "../../../internal/utils";
export declare class GlobalHookConfig extends SpeakeasyBase {
    contentType?: string;
    insecureSsl?: string;
    secret?: string;
    url?: string;
}
export declare class GlobalHook extends SpeakeasyBase {
    active?: boolean;
    config?: GlobalHookConfig;
    createdAt?: string;
    events?: string[];
    id?: number;
    name?: string;
    pingUrl?: string;
    type?: string;
    updatedAt?: string;
    url?: string;
}
