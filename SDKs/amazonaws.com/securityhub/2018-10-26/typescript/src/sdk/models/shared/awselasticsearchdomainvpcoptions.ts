import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsElasticsearchDomainVpcOptions
/** 
 * Information that Elasticsearch derives based on <code>VPCOptions</code> for the domain.
**/
export class AwsElasticsearchDomainVpcOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=VPCId" })
  vpcId?: string;
}
