import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FailureDetails
/** 
 * Information about an Automation failure.
**/
export class FailureDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Details" })
  details?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=FailureStage" })
  failureStage?: string;

  @SpeakeasyMetadata({ data: "json, name=FailureType" })
  failureType?: string;
}
