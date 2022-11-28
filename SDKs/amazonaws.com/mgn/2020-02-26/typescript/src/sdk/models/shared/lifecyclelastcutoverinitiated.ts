import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LifeCycleLastCutoverInitiated
/** 
 * Lifecycle last Cutover initiated.
**/
export class LifeCycleLastCutoverInitiated extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiCallDateTime" })
  apiCallDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=jobID" })
  jobId?: string;
}
