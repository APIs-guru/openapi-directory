import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class DescribeTagsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TagList", elemType: Tag })
  tagList?: Tag[];
}
