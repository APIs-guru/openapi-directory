import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LabelingJobForWorkteamSummary } from "./labelingjobforworkteamsummary";



export class ListLabelingJobsForWorkteamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LabelingJobSummaryList", elemType: LabelingJobForWorkteamSummary })
  labelingJobSummaryList: LabelingJobForWorkteamSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
