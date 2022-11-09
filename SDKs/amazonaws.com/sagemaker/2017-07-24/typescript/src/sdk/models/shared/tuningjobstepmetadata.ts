import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TuningJobStepMetaData
/** 
 * Metadata for a tuning step.
**/
export class TuningJobStepMetaData extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;
}
