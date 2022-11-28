import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ElasticLoadBalancer
/** 
 * Describes an Elastic Load Balancing instance.
**/
export class ElasticLoadBalancer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @SpeakeasyMetadata({ data: "json, name=DnsName" })
  dnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=Ec2InstanceIds" })
  ec2InstanceIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=ElasticLoadBalancerName" })
  elasticLoadBalancerName?: string;

  @SpeakeasyMetadata({ data: "json, name=LayerId" })
  layerId?: string;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
