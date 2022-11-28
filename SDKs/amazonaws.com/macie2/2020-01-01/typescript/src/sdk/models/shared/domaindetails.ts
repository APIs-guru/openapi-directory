import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DomainDetails
/** 
 * Provides information about the domain name of the device that an entity used to perform an action on an affected resource.
**/
export class DomainDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;
}
