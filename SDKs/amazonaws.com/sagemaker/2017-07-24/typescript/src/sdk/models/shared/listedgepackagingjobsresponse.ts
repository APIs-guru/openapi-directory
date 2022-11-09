import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EdgePackagingJobSummary } from "./edgepackagingjobsummary";


export class ListEdgePackagingJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EdgePackagingJobSummaries", elemType: shared.EdgePackagingJobSummary })
  edgePackagingJobSummaries: EdgePackagingJobSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
