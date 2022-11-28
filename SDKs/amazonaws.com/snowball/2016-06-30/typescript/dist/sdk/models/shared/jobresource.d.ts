import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2AmiResource } from "./ec2amiresource";
import { LambdaResource } from "./lambdaresource";
import { S3Resource } from "./s3resource";
/**
 * Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job.
**/
export declare class JobResource extends SpeakeasyBase {
    ec2AmiResources?: Ec2AmiResource[];
    lambdaResources?: LambdaResource[];
    s3Resources?: S3Resource[];
}
