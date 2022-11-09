import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1InstanceAttachment } from "./googlecloudapigeev1instanceattachment";


// GoogleCloudApigeeV1ListInstanceAttachmentsResponse
/** 
 * Response for ListInstanceAttachments.
**/
export class GoogleCloudApigeeV1ListInstanceAttachmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachments", elemType: shared.GoogleCloudApigeeV1InstanceAttachment })
  attachments?: GoogleCloudApigeeV1InstanceAttachment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
