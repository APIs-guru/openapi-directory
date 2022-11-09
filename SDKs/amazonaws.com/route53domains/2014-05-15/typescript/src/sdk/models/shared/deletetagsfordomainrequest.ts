import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteTagsForDomainRequest
/** 
 * The DeleteTagsForDomainRequest includes the following elements.
**/
export class DeleteTagsForDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=TagsToDelete" })
  tagsToDelete: string[];
}
