import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTagsForResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=tags" })
  tags: Map<string, string>;
}
