import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// UpdateTagsForDomainRequest
/** 
 * The UpdateTagsForDomainRequest includes the following elements.
**/
export class UpdateTagsForDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=TagsToUpdate", elemType: Tag })
  tagsToUpdate?: Tag[];
}
