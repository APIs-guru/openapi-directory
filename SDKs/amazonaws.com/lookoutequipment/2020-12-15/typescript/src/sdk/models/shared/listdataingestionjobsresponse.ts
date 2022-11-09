import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataIngestionJobSummary } from "./dataingestionjobsummary";


export class ListDataIngestionJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataIngestionJobSummaries", elemType: shared.DataIngestionJobSummary })
  dataIngestionJobSummaries?: DataIngestionJobSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
