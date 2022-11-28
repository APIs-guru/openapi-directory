import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProcessingJobStepMetadata
/** 
 * Metadata for a processing job step.
**/
export class ProcessingJobStepMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;
}
