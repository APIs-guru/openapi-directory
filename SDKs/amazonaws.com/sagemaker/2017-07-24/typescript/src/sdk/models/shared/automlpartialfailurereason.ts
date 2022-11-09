import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AutoMlPartialFailureReason
/** 
 * The reason for a partial failure of an AutoML job.
**/
export class AutoMlPartialFailureReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=PartialFailureMessage" })
  partialFailureMessage?: string;
}
