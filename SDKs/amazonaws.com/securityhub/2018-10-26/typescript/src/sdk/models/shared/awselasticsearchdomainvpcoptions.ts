import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsElasticsearchDomainVpcOptions
/** 
 * Information that Elasticsearch derives based on <code>VPCOptions</code> for the domain.
**/
export class AwsElasticsearchDomainVpcOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @Metadata({ data: "json, name=VPCId" })
  vpcId?: string;
}
