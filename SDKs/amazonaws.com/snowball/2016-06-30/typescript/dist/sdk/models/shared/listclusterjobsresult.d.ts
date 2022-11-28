import { SpeakeasyBase } from "../../../internal/utils";
import { JobListEntry } from "./joblistentry";
export declare class ListClusterJobsResult extends SpeakeasyBase {
    jobListEntries?: JobListEntry[];
    nextToken?: string;
}
