import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteTagsForDomainRequest
/** 
 * The DeleteTagsForDomainRequest includes the following elements.
**/
export class DeleteTagsForDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=TagsToDelete" })
  tagsToDelete: string[];
}
