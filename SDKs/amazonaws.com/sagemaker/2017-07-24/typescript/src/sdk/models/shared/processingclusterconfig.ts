import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProcessingInstanceTypeEnum } from "./processinginstancetypeenum";


// ProcessingClusterConfig
/** 
 * Configuration for the cluster used to run a processing job.
**/
export class ProcessingClusterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceCount" })
  instanceCount: number;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType: ProcessingInstanceTypeEnum;

  @Metadata({ data: "json, name=VolumeKmsKeyId" })
  volumeKmsKeyId?: string;

  @Metadata({ data: "json, name=VolumeSizeInGB" })
  volumeSizeInGb: number;
}
