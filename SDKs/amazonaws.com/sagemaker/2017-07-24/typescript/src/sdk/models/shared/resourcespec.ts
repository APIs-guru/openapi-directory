import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppInstanceTypeEnum } from "./appinstancetypeenum";


// ResourceSpec
/** 
 * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
**/
export class ResourceSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceType" })
  instanceType?: AppInstanceTypeEnum;

  @Metadata({ data: "json, name=LifecycleConfigArn" })
  lifecycleConfigArn?: string;

  @Metadata({ data: "json, name=SageMakerImageArn" })
  sageMakerImageArn?: string;

  @Metadata({ data: "json, name=SageMakerImageVersionArn" })
  sageMakerImageVersionArn?: string;
}
