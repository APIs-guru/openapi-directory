import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// UpdateTagsForDomainRequest
/** 
 * The UpdateTagsForDomainRequest includes the following elements.
**/
export class UpdateTagsForDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=TagsToUpdate", elemType: shared.Tag })
  tagsToUpdate?: Tag[];
}
