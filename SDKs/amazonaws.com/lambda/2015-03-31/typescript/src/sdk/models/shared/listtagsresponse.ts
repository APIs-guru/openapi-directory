import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTagsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
