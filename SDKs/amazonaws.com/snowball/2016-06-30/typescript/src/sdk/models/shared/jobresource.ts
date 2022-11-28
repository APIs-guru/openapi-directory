import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ec2AmiResource } from "./ec2amiresource";
import { LambdaResource } from "./lambdaresource";
import { S3Resource } from "./s3resource";



// JobResource
/** 
 * Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job.
**/
export class JobResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Ec2AmiResources", elemType: Ec2AmiResource })
  ec2AmiResources?: Ec2AmiResource[];

  @SpeakeasyMetadata({ data: "json, name=LambdaResources", elemType: LambdaResource })
  lambdaResources?: LambdaResource[];

  @SpeakeasyMetadata({ data: "json, name=S3Resources", elemType: S3Resource })
  s3Resources?: S3Resource[];
}
