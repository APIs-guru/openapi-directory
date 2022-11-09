import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @Metadata({ data: "json, name=BackendServerDescriptions", elemType: shared.AwsElbLoadBalancerBackendServerDescription })
  backendServerDescriptions?: AwsElbLoadBalancerBackendServerDescription[];

  @Metadata({ data: "json, name=CanonicalHostedZoneName" })
  canonicalHostedZoneName?: string;

  @Metadata({ data: "json, name=CanonicalHostedZoneNameID" })
  canonicalHostedZoneNameId?: string;

  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @Metadata({ data: "json, name=DnsName" })
  dnsName?: string;

  @Metadata({ data: "json, name=HealthCheck" })
  healthCheck?: AwsElbLoadBalancerHealthCheck;

  @Metadata({ data: "json, name=Instances", elemType: shared.AwsElbLoadBalancerInstance })
  instances?: AwsElbLoadBalancerInstance[];

  @Metadata({ data: "json, name=ListenerDescriptions", elemType: shared.AwsElbLoadBalancerListenerDescription })
  listenerDescriptions?: AwsElbLoadBalancerListenerDescription[];

  @Metadata({ data: "json, name=LoadBalancerAttributes" })
  loadBalancerAttributes?: AwsElbLoadBalancerAttributes;

  @Metadata({ data: "json, name=LoadBalancerName" })
  loadBalancerName?: string;

  @Metadata({ data: "json, name=Policies" })
  policies?: AwsElbLoadBalancerPolicies;

  @Metadata({ data: "json, name=Scheme" })
  scheme?: string;

  @Metadata({ data: "json, name=SecurityGroups" })
  securityGroups?: string[];

  @Metadata({ data: "json, name=SourceSecurityGroup" })
  sourceSecurityGroup?: AwsElbLoadBalancerSourceSecurityGroup;

  @Metadata({ data: "json, name=Subnets" })
  subnets?: string[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
