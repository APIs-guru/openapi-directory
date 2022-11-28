import { SpeakeasyBase } from "../../../internal/utils";
export declare class PreReceiveEnvironmentDownload extends SpeakeasyBase {
    downloadedAt?: string;
    message?: string;
    state?: string;
    url?: string;
}
export declare class PreReceiveEnvironment extends SpeakeasyBase {
    createdAt?: string;
    defaultEnvironment?: boolean;
    download?: PreReceiveEnvironmentDownload;
    hooksCount?: number;
    htmlUrl?: string;
    id?: number;
    imageUrl?: string;
    name?: string;
    url?: string;
}
