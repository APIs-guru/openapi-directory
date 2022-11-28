import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoMlJobSummary } from "./automljobsummary";



export class ListAutoMlJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoMLJobSummaries", elemType: AutoMlJobSummary })
  autoMlJobSummaries: AutoMlJobSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
