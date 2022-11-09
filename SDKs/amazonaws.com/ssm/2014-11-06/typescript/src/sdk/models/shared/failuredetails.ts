import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FailureDetails
/** 
 * Information about an Automation failure.
**/
export class FailureDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Details" })
  details?: Map<string, string[]>;

  @Metadata({ data: "json, name=FailureStage" })
  failureStage?: string;

  @Metadata({ data: "json, name=FailureType" })
  failureType?: string;
}
