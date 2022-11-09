import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TrainingInstanceTypeEnum } from "./traininginstancetypeenum";


// ResourceConfig
/** 
 * Describes the resources, including ML compute instances and ML storage volumes, to use for model training. 
**/
export class ResourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceCount" })
  instanceCount: number;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType: TrainingInstanceTypeEnum;

  @Metadata({ data: "json, name=VolumeKmsKeyId" })
  volumeKmsKeyId?: string;

  @Metadata({ data: "json, name=VolumeSizeInGB" })
  volumeSizeInGb: number;
}
