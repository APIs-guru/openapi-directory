import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTagsLogGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
