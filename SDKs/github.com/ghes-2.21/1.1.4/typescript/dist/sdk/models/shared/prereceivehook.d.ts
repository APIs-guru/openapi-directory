import { SpeakeasyBase } from "../../../internal/utils";
export declare class PreReceiveHookEnvironmentDownload extends SpeakeasyBase {
    downloadedAt?: string;
    message?: string;
    state?: string;
    url?: string;
}
export declare class PreReceiveHookEnvironment extends SpeakeasyBase {
    createdAt?: string;
    defaultEnvironment?: boolean;
    download?: PreReceiveHookEnvironmentDownload;
    hooksCount?: number;
    htmlUrl?: string;
    id?: number;
    imageUrl?: string;
    name?: string;
    url?: string;
}
export declare class PreReceiveHookScriptRepository extends SpeakeasyBase {
    fullName?: string;
    htmlUrl?: string;
    id?: number;
    url?: string;
}
export declare class PreReceiveHook extends SpeakeasyBase {
    allowDownstreamConfiguration?: boolean;
    enforcement?: string;
    environment?: PreReceiveHookEnvironment;
    id?: number;
    name?: string;
    script?: string;
    scriptRepository?: PreReceiveHookScriptRepository;
}
