import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the status and settings of the voice channel for an application.
**/
export declare class VoiceChannelResponse extends SpeakeasyBase {
    applicationId?: string;
    creationDate?: string;
    enabled?: boolean;
    hasCredential?: boolean;
    id?: string;
    isArchived?: boolean;
    lastModifiedBy?: string;
    lastModifiedDate?: string;
    platform: string;
    version?: number;
}
