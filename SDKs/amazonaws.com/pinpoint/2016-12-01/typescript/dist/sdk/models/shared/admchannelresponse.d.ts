import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.
**/
export declare class AdmChannelResponse extends SpeakeasyBase {
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
