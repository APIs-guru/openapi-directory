import { SpeakeasyBase } from "../../../internal/utils";
import { Site } from "./site";
/**
 * Response definition for the sites list rpc.
**/
export declare class ListSitesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sites?: Site[];
}
