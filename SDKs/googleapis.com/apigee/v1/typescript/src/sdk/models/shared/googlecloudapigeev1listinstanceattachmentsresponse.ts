import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1InstanceAttachment } from "./googlecloudapigeev1instanceattachment";



// GoogleCloudApigeeV1ListInstanceAttachmentsResponse
/** 
 * Response for ListInstanceAttachments.
**/
export class GoogleCloudApigeeV1ListInstanceAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: GoogleCloudApigeeV1InstanceAttachment })
  attachments?: GoogleCloudApigeeV1InstanceAttachment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
