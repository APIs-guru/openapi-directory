import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListFiltersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetGroupArn" })
  datasetGroupArn?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
