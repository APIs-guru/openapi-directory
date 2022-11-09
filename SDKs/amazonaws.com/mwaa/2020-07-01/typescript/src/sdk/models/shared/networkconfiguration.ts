import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NetworkConfiguration
/** 
 * The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.
**/
export class NetworkConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];
}
