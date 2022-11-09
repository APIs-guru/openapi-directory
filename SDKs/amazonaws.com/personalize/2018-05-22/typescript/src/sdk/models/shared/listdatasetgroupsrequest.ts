import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListDatasetGroupsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
