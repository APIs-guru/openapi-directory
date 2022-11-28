import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
