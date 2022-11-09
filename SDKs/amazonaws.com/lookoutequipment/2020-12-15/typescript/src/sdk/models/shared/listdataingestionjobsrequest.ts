import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IngestionJobStatusEnum } from "./ingestionjobstatusenum";


export class ListDataIngestionJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatasetName" })
  datasetName?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Status" })
  status?: IngestionJobStatusEnum;
}
