import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeCompanyNetworkConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
