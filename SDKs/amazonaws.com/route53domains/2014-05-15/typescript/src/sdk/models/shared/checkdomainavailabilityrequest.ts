import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CheckDomainAvailabilityRequest
/** 
 * The CheckDomainAvailability request contains the following elements.
**/
export class CheckDomainAvailabilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=IdnLangCode" })
  idnLangCode?: string;
}
