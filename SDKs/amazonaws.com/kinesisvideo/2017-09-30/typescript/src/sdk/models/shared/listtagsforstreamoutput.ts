import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTagsForStreamOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
