import { SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";
/**
 * JSON template for a collection of activities.
**/
export declare class Activities extends SpeakeasyBase {
    etag?: string;
    items?: Activity[];
    kind?: string;
    nextPageToken?: string;
}
