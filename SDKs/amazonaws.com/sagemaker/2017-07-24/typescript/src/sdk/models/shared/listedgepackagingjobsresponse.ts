import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EdgePackagingJobSummary } from "./edgepackagingjobsummary";



export class ListEdgePackagingJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EdgePackagingJobSummaries", elemType: EdgePackagingJobSummary })
  edgePackagingJobSummaries: EdgePackagingJobSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
