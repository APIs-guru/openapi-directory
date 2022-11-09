import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainDetails } from "./domaindetails";
import { IpAddressDetails } from "./ipaddressdetails";
import { UserIdentity } from "./useridentity";


// FindingActor
/** 
 * Provides information about an entity that performed an action that produced a policy finding for a resource.
**/
export class FindingActor extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainDetails" })
  domainDetails?: DomainDetails;

  @Metadata({ data: "json, name=ipAddressDetails" })
  ipAddressDetails?: IpAddressDetails;

  @Metadata({ data: "json, name=userIdentity" })
  userIdentity?: UserIdentity;
}
