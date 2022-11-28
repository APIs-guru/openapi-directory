import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AutoMlPartialFailureReason
/** 
 * The reason for a partial failure of an AutoML job.
**/
export class AutoMlPartialFailureReason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PartialFailureMessage" })
  partialFailureMessage?: string;
}
