import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1EndpointAttachment } from "./googlecloudapigeev1endpointattachment";
/**
 * Response for ListEndpointAttachments method.
**/
export declare class GoogleCloudApigeeV1ListEndpointAttachmentsResponse extends SpeakeasyBase {
    endpointAttachments?: GoogleCloudApigeeV1EndpointAttachment[];
    nextPageToken?: string;
}
