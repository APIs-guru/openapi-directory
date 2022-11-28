import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// TagList
/** 
 * Tags List
**/
export class TagList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum: number;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags: Tag[];
}
