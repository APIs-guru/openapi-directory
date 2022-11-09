import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1EndpointAttachment } from "./googlecloudapigeev1endpointattachment";


// GoogleCloudApigeeV1ListEndpointAttachmentsResponse
/** 
 * Response for ListEndpointAttachments method.
**/
export class GoogleCloudApigeeV1ListEndpointAttachmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpointAttachments", elemType: shared.GoogleCloudApigeeV1EndpointAttachment })
  endpointAttachments?: GoogleCloudApigeeV1EndpointAttachment[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
