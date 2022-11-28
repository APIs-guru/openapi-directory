import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublisherProfile } from "./publisherprofile";



// ListPublisherProfilesResponse
/** 
 * Response message for profiles visible to the buyer.
**/
export class ListPublisherProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=publisherProfiles", elemType: PublisherProfile })
  publisherProfiles?: PublisherProfile[];
}
