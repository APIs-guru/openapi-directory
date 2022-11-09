import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LabelingJobForWorkteamSummary } from "./labelingjobforworkteamsummary";


export class ListLabelingJobsForWorkteamResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LabelingJobSummaryList", elemType: shared.LabelingJobForWorkteamSummary })
  labelingJobSummaryList: LabelingJobForWorkteamSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
