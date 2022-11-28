import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TuningJobStepMetaData
/** 
 * Metadata for a tuning step.
**/
export class TuningJobStepMetaData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;
}
