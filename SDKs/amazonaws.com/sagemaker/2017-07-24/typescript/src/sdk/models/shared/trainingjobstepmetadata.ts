import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrainingJobStepMetadata
/** 
 * Metadata for a training job step.
**/
export class TrainingJobStepMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;
}
