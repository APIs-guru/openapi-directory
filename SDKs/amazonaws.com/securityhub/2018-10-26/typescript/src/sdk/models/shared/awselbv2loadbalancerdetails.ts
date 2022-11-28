import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
import { LoadBalancerState } from "./loadbalancerstate";



// AwsElbv2LoadBalancerDetails
/** 
 * Information about a load balancer.
**/
export class AwsElbv2LoadBalancerDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZones", elemType: AvailabilityZone })
  availabilityZones?: AvailabilityZone[];

  @SpeakeasyMetadata({ data: "json, name=CanonicalHostedZoneId" })
  canonicalHostedZoneId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @SpeakeasyMetadata({ data: "json, name=DNSName" })
  dnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=IpAddressType" })
  ipAddressType?: string;

  @SpeakeasyMetadata({ data: "json, name=Scheme" })
  scheme?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroups" })
  securityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: LoadBalancerState;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
