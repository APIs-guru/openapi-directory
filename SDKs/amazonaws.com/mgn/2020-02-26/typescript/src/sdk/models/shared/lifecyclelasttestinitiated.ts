import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LifeCycleLastTestInitiated
/** 
 * Lifecycle last Test initiated.
**/
export class LifeCycleLastTestInitiated extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiCallDateTime" })
  apiCallDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=jobID" })
  jobId?: string;
}
