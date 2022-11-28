import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainDetails } from "./domaindetails";
import { IpAddressDetails } from "./ipaddressdetails";
import { UserIdentity } from "./useridentity";



// FindingActor
/** 
 * Provides information about an entity that performed an action that produced a policy finding for a resource.
**/
export class FindingActor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainDetails" })
  domainDetails?: DomainDetails;

  @SpeakeasyMetadata({ data: "json, name=ipAddressDetails" })
  ipAddressDetails?: IpAddressDetails;

  @SpeakeasyMetadata({ data: "json, name=userIdentity" })
  userIdentity?: UserIdentity;
}
