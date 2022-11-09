import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LabelingJobSummary } from "./labelingjobsummary";


export class ListLabelingJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LabelingJobSummaryList", elemType: shared.LabelingJobSummary })
  labelingJobSummaryList?: LabelingJobSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
