import { SpeakeasyBase } from "../../../internal/utils";
import { EdgePackagingJobSummary } from "./edgepackagingjobsummary";
export declare class ListEdgePackagingJobsResponse extends SpeakeasyBase {
    edgePackagingJobSummaries: EdgePackagingJobSummary[];
    nextToken?: string;
}
