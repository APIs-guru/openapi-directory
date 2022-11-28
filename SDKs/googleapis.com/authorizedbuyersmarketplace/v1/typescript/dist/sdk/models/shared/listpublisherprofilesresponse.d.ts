import { SpeakeasyBase } from "../../../internal/utils";
import { PublisherProfile } from "./publisherprofile";
/**
 * Response message for profiles visible to the buyer.
**/
export declare class ListPublisherProfilesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    publisherProfiles?: PublisherProfile[];
}
