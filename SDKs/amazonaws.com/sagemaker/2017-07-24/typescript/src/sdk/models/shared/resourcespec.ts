import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppInstanceTypeEnum } from "./appinstancetypeenum";



// ResourceSpec
/** 
 * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
**/
export class ResourceSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType?: AppInstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LifecycleConfigArn" })
  lifecycleConfigArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SageMakerImageArn" })
  sageMakerImageArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SageMakerImageVersionArn" })
  sageMakerImageVersionArn?: string;
}
