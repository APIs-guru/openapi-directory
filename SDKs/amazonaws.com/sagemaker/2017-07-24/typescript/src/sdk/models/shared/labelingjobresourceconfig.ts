import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LabelingJobResourceConfig
/** 
 * Configure encryption on the storage volume attached to the ML compute instance used to run automated data labeling model training and inference. 
**/
export class LabelingJobResourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VolumeKmsKeyId" })
  volumeKmsKeyId?: string;
}
