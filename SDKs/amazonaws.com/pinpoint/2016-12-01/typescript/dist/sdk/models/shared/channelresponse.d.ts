import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the general settings and status of a channel for an application.
**/
export declare class ChannelResponse extends SpeakeasyBase {
    applicationId?: string;
    creationDate?: string;
    enabled?: boolean;
    hasCredential?: boolean;
    id?: string;
    isArchived?: boolean;
    lastModifiedBy?: string;
    lastModifiedDate?: string;
    version?: number;
}
