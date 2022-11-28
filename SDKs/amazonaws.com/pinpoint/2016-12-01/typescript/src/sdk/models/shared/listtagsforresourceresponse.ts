import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagsModel } from "./tagsmodel";



export class ListTagsForResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TagsModel" })
  tagsModel: TagsModel;
}
