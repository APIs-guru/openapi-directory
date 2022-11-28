import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1InstanceAttachment } from "./googlecloudapigeev1instanceattachment";
/**
 * Response for ListInstanceAttachments.
**/
export declare class GoogleCloudApigeeV1ListInstanceAttachmentsResponse extends SpeakeasyBase {
    attachments?: GoogleCloudApigeeV1InstanceAttachment[];
    nextPageToken?: string;
}
