import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsElbLoadBalancerBackendServerDescription } from "./awselbloadbalancerbackendserverdescription";
import { AwsElbLoadBalancerHealthCheck } from "./awselbloadbalancerhealthcheck";
import { AwsElbLoadBalancerInstance } from "./awselbloadbalancerinstance";
import { AwsElbLoadBalancerListenerDescription } from "./awselbloadbalancerlistenerdescription";
import { AwsElbLoadBalancerAttributes } from "./awselbloadbalancerattributes";
import { AwsElbLoadBalancerPolicies } from "./awselbloadbalancerpolicies";
import { AwsElbLoadBalancerSourceSecurityGroup } from "./awselbloadbalancersourcesecuritygroup";



// AwsElbLoadBalancerDetails
/** 
 * Contains details about a Classic Load Balancer.
**/
export class AwsElbLoadBalancerDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @SpeakeasyMetadata({ data: "json, name=BackendServerDescriptions", elemType: AwsElbLoadBalancerBackendServerDescription })
  backendServerDescriptions?: AwsElbLoadBalancerBackendServerDescription[];

  @SpeakeasyMetadata({ data: "json, name=CanonicalHostedZoneName" })
  canonicalHostedZoneName?: string;

  @SpeakeasyMetadata({ data: "json, name=CanonicalHostedZoneNameID" })
  canonicalHostedZoneNameId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @SpeakeasyMetadata({ data: "json, name=DnsName" })
  dnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=HealthCheck" })
  healthCheck?: AwsElbLoadBalancerHealthCheck;

  @SpeakeasyMetadata({ data: "json, name=Instances", elemType: AwsElbLoadBalancerInstance })
  instances?: AwsElbLoadBalancerInstance[];

  @SpeakeasyMetadata({ data: "json, name=ListenerDescriptions", elemType: AwsElbLoadBalancerListenerDescription })
  listenerDescriptions?: AwsElbLoadBalancerListenerDescription[];

  @SpeakeasyMetadata({ data: "json, name=LoadBalancerAttributes" })
  loadBalancerAttributes?: AwsElbLoadBalancerAttributes;

  @SpeakeasyMetadata({ data: "json, name=LoadBalancerName" })
  loadBalancerName?: string;

  @SpeakeasyMetadata({ data: "json, name=Policies" })
  policies?: AwsElbLoadBalancerPolicies;

  @SpeakeasyMetadata({ data: "json, name=Scheme" })
  scheme?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroups" })
  securityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=SourceSecurityGroup" })
  sourceSecurityGroup?: AwsElbLoadBalancerSourceSecurityGroup;

  @SpeakeasyMetadata({ data: "json, name=Subnets" })
  subnets?: string[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
