import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The <a>VpcConfig</a> configuration object that specifies the VPC that you want the compilation jobs to connect to. For more information on controlling access to your Amazon S3 buckets used for compilation job, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/neo-vpc.html">Give Amazon SageMaker Compilation Jobs Access to Resources in Your Amazon VPC</a>.
**/
export declare class NeoVpcConfig extends SpeakeasyBase {
    securityGroupIds: string[];
    subnets: string[];
}
