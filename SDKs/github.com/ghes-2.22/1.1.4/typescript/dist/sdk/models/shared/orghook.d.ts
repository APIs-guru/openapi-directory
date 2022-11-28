import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrgHookConfig extends SpeakeasyBase {
    contentType?: string;
    insecureSsl?: string;
    secret?: string;
    url?: string;
}
/**
 * Org Hook
**/
export declare class OrgHook extends SpeakeasyBase {
    active: boolean;
    config: OrgHookConfig;
    createdAt: Date;
    events: string[];
    id: number;
    name: string;
    pingUrl: string;
    type: string;
    updatedAt: Date;
    url: string;
}
