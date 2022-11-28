import { SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";
/**
 * The response from the list request. Contains a list of activities and a token to retrieve the next page of results.
**/
export declare class ListActivitiesResponse extends SpeakeasyBase {
    activities?: Activity[];
    nextPageToken?: string;
}
