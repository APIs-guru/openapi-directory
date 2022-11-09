import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DomainDetails
/** 
 * Provides information about the domain name of the device that an entity used to perform an action on an affected resource.
**/
export class DomainDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainName" })
  domainName?: string;
}
