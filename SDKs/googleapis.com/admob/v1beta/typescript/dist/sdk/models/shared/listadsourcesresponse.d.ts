import { SpeakeasyBase } from "../../../internal/utils";
import { AdSource } from "./adsource";
/**
 * Response for the ListAdSourcesRequest.
**/
export declare class ListAdSourcesResponse extends SpeakeasyBase {
    adSources?: AdSource[];
    nextPageToken?: string;
}
