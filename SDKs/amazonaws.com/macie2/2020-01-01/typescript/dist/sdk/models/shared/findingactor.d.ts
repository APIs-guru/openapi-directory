import { SpeakeasyBase } from "../../../internal/utils";
import { DomainDetails } from "./domaindetails";
import { IpAddressDetails } from "./ipaddressdetails";
import { UserIdentity } from "./useridentity";
/**
 * Provides information about an entity that performed an action that produced a policy finding for a resource.
**/
export declare class FindingActor extends SpeakeasyBase {
    domainDetails?: DomainDetails;
    ipAddressDetails?: IpAddressDetails;
    userIdentity?: UserIdentity;
}
