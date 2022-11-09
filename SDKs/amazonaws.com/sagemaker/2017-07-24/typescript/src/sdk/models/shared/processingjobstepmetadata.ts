import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProcessingJobStepMetadata
/** 
 * Metadata for a processing job step.
**/
export class ProcessingJobStepMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;
}
