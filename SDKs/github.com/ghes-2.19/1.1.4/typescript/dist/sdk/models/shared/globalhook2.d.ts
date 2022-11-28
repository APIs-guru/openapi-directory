import { SpeakeasyBase } from "../../../internal/utils";
export declare class GlobalHook2Config extends SpeakeasyBase {
    contentType?: string;
    insecureSsl?: string;
    url?: string;
}
export declare class GlobalHook2 extends SpeakeasyBase {
    active?: boolean;
    config?: GlobalHook2Config;
    createdAt?: string;
    events?: string[];
    id?: number;
    name?: string;
    pingUrl?: string;
    type?: string;
    updatedAt?: string;
    url?: string;
}
