import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * ListJob Response.
**/
export declare class ListJobsResponse extends SpeakeasyBase {
    jobs?: Job[];
    nextPageToken?: string;
    unreachable?: string[];
}
