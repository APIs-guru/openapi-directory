import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListDatasetImportJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetArn" })
  datasetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
