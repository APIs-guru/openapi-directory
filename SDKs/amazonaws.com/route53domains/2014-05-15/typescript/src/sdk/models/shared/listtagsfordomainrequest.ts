import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListTagsForDomainRequest
/** 
 * The ListTagsForDomainRequest includes the following elements.
**/
export class ListTagsForDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;
}
