import { SpeakeasyBase } from "../../../internal/utils";
import { LabelingJobSummary } from "./labelingjobsummary";
export declare class ListLabelingJobsResponse extends SpeakeasyBase {
    labelingJobSummaryList?: LabelingJobSummary[];
    nextToken?: string;
}
