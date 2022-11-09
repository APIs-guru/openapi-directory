import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListTagsForDomainRequest
/** 
 * The ListTagsForDomainRequest includes the following elements.
**/
export class ListTagsForDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName: string;
}
