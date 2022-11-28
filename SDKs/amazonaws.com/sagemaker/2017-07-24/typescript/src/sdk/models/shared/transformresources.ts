import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransformInstanceTypeEnum } from "./transforminstancetypeenum";



// TransformResources
/** 
 * Describes the resources, including ML instance types and ML instance count, to use for transform job.
**/
export class TransformResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceCount" })
  instanceCount: number;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType: TransformInstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=VolumeKmsKeyId" })
  volumeKmsKeyId?: string;
}
