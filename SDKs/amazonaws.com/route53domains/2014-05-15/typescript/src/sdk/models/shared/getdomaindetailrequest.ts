import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetDomainDetailRequest
/** 
 * The GetDomainDetail request includes the following element.
**/
export class GetDomainDetailRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName: string;
}
