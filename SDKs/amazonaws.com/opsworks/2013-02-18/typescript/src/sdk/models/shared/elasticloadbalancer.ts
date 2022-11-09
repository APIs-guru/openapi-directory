import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ElasticLoadBalancer
/** 
 * Describes an Elastic Load Balancing instance.
**/
export class ElasticLoadBalancer extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @Metadata({ data: "json, name=DnsName" })
  dnsName?: string;

  @Metadata({ data: "json, name=Ec2InstanceIds" })
  ec2InstanceIds?: string[];

  @Metadata({ data: "json, name=ElasticLoadBalancerName" })
  elasticLoadBalancerName?: string;

  @Metadata({ data: "json, name=LayerId" })
  layerId?: string;

  @Metadata({ data: "json, name=Region" })
  region?: string;

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
