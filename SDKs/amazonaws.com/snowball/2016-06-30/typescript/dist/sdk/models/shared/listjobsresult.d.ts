import { SpeakeasyBase } from "../../../internal/utils";
import { JobListEntry } from "./joblistentry";
export declare class ListJobsResult extends SpeakeasyBase {
    jobListEntries?: JobListEntry[];
    nextToken?: string;
}
