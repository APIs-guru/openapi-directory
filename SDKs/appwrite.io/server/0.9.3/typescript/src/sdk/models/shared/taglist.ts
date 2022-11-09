import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// TagList
/** 
 * Tags List
**/
export class TagList extends SpeakeasyBase {
  @Metadata({ data: "json, name=sum" })
  sum: number;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags: Tag[];
}
