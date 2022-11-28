import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListDatasetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatasetNameBeginsWith" })
  datasetNameBeginsWith?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
