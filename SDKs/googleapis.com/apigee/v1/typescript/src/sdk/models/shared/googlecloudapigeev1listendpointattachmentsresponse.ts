import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1EndpointAttachment } from "./googlecloudapigeev1endpointattachment";



// GoogleCloudApigeeV1ListEndpointAttachmentsResponse
/** 
 * Response for ListEndpointAttachments method.
**/
export class GoogleCloudApigeeV1ListEndpointAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpointAttachments", elemType: GoogleCloudApigeeV1EndpointAttachment })
  endpointAttachments?: GoogleCloudApigeeV1EndpointAttachment[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
