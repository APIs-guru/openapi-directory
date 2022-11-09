import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LifeCycleLastCutoverInitiated
/** 
 * Lifecycle last Cutover initiated.
**/
export class LifeCycleLastCutoverInitiated extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiCallDateTime" })
  apiCallDateTime?: string;

  @Metadata({ data: "json, name=jobID" })
  jobId?: string;
}
