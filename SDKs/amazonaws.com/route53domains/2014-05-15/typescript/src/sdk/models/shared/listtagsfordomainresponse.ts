import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// ListTagsForDomainResponse
/** 
 * The ListTagsForDomain response includes the following elements.
**/
export class ListTagsForDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TagList", elemType: Tag })
  tagList: Tag[];
}
