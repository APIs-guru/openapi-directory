import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LabelingJobResourceConfig
/** 
 * Configure encryption on the storage volume attached to the ML compute instance used to run automated data labeling model training and inference. 
**/
export class LabelingJobResourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=VolumeKmsKeyId" })
  volumeKmsKeyId?: string;
}
