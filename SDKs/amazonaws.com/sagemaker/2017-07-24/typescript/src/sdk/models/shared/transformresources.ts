import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransformInstanceTypeEnum } from "./transforminstancetypeenum";


// TransformResources
/** 
 * Describes the resources, including ML instance types and ML instance count, to use for transform job.
**/
export class TransformResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceCount" })
  instanceCount: number;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType: TransformInstanceTypeEnum;

  @Metadata({ data: "json, name=VolumeKmsKeyId" })
  volumeKmsKeyId?: string;
}
