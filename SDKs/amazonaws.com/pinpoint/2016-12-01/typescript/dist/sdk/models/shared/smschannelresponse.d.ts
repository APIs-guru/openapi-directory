import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the status and settings of the SMS channel for an application.
**/
export declare class SmsChannelResponse extends SpeakeasyBase {
    applicationId?: string;
    creationDate?: string;
    enabled?: boolean;
    hasCredential?: boolean;
    id?: string;
    isArchived?: boolean;
    lastModifiedBy?: string;
    lastModifiedDate?: string;
    platform: string;
    promotionalMessagesPerSecond?: number;
    senderId?: string;
    shortCode?: string;
    transactionalMessagesPerSecond?: number;
    version?: number;
}
