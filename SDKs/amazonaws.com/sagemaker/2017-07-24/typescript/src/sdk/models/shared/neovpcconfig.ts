import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NeoVpcConfig
/** 
 * The <a>VpcConfig</a> configuration object that specifies the VPC that you want the compilation jobs to connect to. For more information on controlling access to your Amazon S3 buckets used for compilation job, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/neo-vpc.html">Give Amazon SageMaker Compilation Jobs Access to Resources in Your Amazon VPC</a>.
**/
export class NeoVpcConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds: string[];

  @SpeakeasyMetadata({ data: "json, name=Subnets" })
  subnets: string[];
}
