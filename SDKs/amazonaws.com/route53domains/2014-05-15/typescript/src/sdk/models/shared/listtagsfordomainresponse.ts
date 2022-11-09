import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// ListTagsForDomainResponse
/** 
 * The ListTagsForDomain response includes the following elements.
**/
export class ListTagsForDomainResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TagList", elemType: shared.Tag })
  tagList: Tag[];
}
