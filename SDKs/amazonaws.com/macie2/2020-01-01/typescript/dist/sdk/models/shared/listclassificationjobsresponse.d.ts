import { SpeakeasyBase } from "../../../internal/utils";
import { JobSummary } from "./jobsummary";
export declare class ListClassificationJobsResponse extends SpeakeasyBase {
    items?: JobSummary[];
    nextToken?: string;
}
