import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PublisherProfile } from "./publisherprofile";


// ListPublisherProfilesResponse
/** 
 * Response message for profiles visible to the buyer.
**/
export class ListPublisherProfilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=publisherProfiles", elemType: shared.PublisherProfile })
  publisherProfiles?: PublisherProfile[];
}
