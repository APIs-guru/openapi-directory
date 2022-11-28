import { SpeakeasyBase } from "../../../internal/utils";
import { LabelingJobForWorkteamSummary } from "./labelingjobforworkteamsummary";
export declare class ListLabelingJobsForWorkteamResponse extends SpeakeasyBase {
    labelingJobSummaryList: LabelingJobForWorkteamSummary[];
    nextToken?: string;
}
