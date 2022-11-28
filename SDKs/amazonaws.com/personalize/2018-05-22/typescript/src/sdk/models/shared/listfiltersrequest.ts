import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListFiltersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetGroupArn" })
  datasetGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
