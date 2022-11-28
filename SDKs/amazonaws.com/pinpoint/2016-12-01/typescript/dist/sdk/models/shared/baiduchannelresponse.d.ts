import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
**/
export declare class BaiduChannelResponse extends SpeakeasyBase {
    applicationId?: string;
    creationDate?: string;
    credential: string;
    enabled?: boolean;
    hasCredential?: boolean;
    id?: string;
    isArchived?: boolean;
    lastModifiedBy?: string;
    lastModifiedDate?: string;
    platform: string;
    version?: number;
}
