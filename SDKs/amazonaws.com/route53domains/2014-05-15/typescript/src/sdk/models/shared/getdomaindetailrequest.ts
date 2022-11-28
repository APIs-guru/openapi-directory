import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetDomainDetailRequest
/** 
 * The GetDomainDetail request includes the following element.
**/
export class GetDomainDetailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;
}
