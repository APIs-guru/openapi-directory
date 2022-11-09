import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CheckDomainAvailabilityRequest
/** 
 * The CheckDomainAvailability request contains the following elements.
**/
export class CheckDomainAvailabilityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=IdnLangCode" })
  idnLangCode?: string;
}
