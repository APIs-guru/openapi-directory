import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataIngestionJobSummary } from "./dataingestionjobsummary";



export class ListDataIngestionJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataIngestionJobSummaries", elemType: DataIngestionJobSummary })
  dataIngestionJobSummaries?: DataIngestionJobSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
