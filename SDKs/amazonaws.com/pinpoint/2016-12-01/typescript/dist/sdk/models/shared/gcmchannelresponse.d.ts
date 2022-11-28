import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
**/
export declare class GcmChannelResponse extends SpeakeasyBase {
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
