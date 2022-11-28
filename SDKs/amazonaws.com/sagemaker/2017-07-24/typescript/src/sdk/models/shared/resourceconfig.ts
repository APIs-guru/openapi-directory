import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrainingInstanceTypeEnum } from "./traininginstancetypeenum";



// ResourceConfig
/** 
 * Describes the resources, including ML compute instances and ML storage volumes, to use for model training. 
**/
export class ResourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceCount" })
  instanceCount: number;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType: TrainingInstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=VolumeKmsKeyId" })
  volumeKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=VolumeSizeInGB" })
  volumeSizeInGb: number;
}
