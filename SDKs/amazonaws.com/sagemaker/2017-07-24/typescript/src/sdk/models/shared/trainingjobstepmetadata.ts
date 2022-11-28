import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrainingJobStepMetadata
/** 
 * Metadata for a training job step.
**/
export class TrainingJobStepMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;
}
