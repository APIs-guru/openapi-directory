import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IngestionJobStatusEnum } from "./ingestionjobstatusenum";



export class ListDataIngestionJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatasetName" })
  datasetName?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: IngestionJobStatusEnum;
}
