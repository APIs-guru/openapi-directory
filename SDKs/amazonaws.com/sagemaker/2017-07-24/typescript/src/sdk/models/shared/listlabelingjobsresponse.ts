import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LabelingJobSummary } from "./labelingjobsummary";



export class ListLabelingJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LabelingJobSummaryList", elemType: LabelingJobSummary })
  labelingJobSummaryList?: LabelingJobSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
