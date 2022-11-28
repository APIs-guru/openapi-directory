import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.
**/
export declare class ApnsChannelResponse extends SpeakeasyBase {
    applicationId?: string;
    creationDate?: string;
    defaultAuthenticationMethod?: string;
    enabled?: boolean;
    hasCredential?: boolean;
    hasTokenKey?: boolean;
    id?: string;
    isArchived?: boolean;
    lastModifiedBy?: string;
    lastModifiedDate?: string;
    platform: string;
    version?: number;
}
