import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TagsModel } from "./tagsmodel";


export class ListTagsForResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TagsModel" })
  tagsModel: TagsModel;
}
