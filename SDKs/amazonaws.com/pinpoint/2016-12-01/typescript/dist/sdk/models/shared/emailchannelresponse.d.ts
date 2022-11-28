import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the status and settings of the email channel for an application.
**/
export declare class EmailChannelResponse extends SpeakeasyBase {
    applicationId?: string;
    configurationSet?: string;
    creationDate?: string;
    enabled?: boolean;
    fromAddress?: string;
    hasCredential?: boolean;
    id?: string;
    identity?: string;
    isArchived?: boolean;
    lastModifiedBy?: string;
    lastModifiedDate?: string;
    messagesPerSecond?: number;
    platform: string;
    roleArn?: string;
    version?: number;
}
