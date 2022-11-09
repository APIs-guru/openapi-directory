import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LifeCycleLastTestInitiated
/** 
 * Lifecycle last Test initiated.
**/
export class LifeCycleLastTestInitiated extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiCallDateTime" })
  apiCallDateTime?: string;

  @Metadata({ data: "json, name=jobID" })
  jobId?: string;
}
