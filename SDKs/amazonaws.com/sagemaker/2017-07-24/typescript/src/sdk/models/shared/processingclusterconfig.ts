import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessingInstanceTypeEnum } from "./processinginstancetypeenum";



// ProcessingClusterConfig
/** 
 * Configuration for the cluster used to run a processing job.
**/
export class ProcessingClusterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceCount" })
  instanceCount: number;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType: ProcessingInstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=VolumeKmsKeyId" })
  volumeKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=VolumeSizeInGB" })
  volumeSizeInGb: number;
}
