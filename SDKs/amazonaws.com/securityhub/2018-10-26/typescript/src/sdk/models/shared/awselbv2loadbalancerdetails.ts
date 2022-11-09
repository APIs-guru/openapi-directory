import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AvailabilityZone } from "./availabilityzone";
import { LoadBalancerState } from "./loadbalancerstate";


// AwsElbv2LoadBalancerDetails
/** 
 * Information about a load balancer.
**/
export class AwsElbv2LoadBalancerDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZones", elemType: shared.AvailabilityZone })
  availabilityZones?: AvailabilityZone[];

  @Metadata({ data: "json, name=CanonicalHostedZoneId" })
  canonicalHostedZoneId?: string;

  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @Metadata({ data: "json, name=DNSName" })
  dnsName?: string;

  @Metadata({ data: "json, name=IpAddressType" })
  ipAddressType?: string;

  @Metadata({ data: "json, name=Scheme" })
  scheme?: string;

  @Metadata({ data: "json, name=SecurityGroups" })
  securityGroups?: string[];

  @Metadata({ data: "json, name=State" })
  state?: LoadBalancerState;

  @Metadata({ data: "json, name=Type" })
  type?: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
