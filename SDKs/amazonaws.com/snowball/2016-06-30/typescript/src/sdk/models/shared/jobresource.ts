import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Ec2AmiResource } from "./ec2amiresource";
import { LambdaResource } from "./lambdaresource";
import { S3Resource } from "./s3resource";


// JobResource
/** 
 * Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job.
**/
export class JobResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=Ec2AmiResources", elemType: shared.Ec2AmiResource })
  ec2AmiResources?: Ec2AmiResource[];

  @Metadata({ data: "json, name=LambdaResources", elemType: shared.LambdaResource })
  lambdaResources?: LambdaResource[];

  @Metadata({ data: "json, name=S3Resources", elemType: shared.S3Resource })
  s3Resources?: S3Resource[];
}
