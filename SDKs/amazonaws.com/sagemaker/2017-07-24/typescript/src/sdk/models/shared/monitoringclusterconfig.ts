import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessingInstanceTypeEnum } from "./processinginstancetypeenum";



// MonitoringClusterConfig
/** 
 * Configuration for the cluster used to run model monitoring jobs.
**/
export class MonitoringClusterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceCount" })
  instanceCount: number;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType: ProcessingInstanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=VolumeKmsKeyId" })
  volumeKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=VolumeSizeInGB" })
  volumeSizeInGb: number;
}
