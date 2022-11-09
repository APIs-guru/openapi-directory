import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoMlJobSummary } from "./automljobsummary";


export class ListAutoMlJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoMLJobSummaries", elemType: shared.AutoMlJobSummary })
  autoMlJobSummaries: AutoMlJobSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
