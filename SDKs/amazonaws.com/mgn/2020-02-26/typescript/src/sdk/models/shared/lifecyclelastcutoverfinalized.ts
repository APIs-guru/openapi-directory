import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LifeCycleLastCutoverFinalized
/** 
 * Lifecycle Cutover finalized
**/
export class LifeCycleLastCutoverFinalized extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiCallDateTime" })
  apiCallDateTime?: string;
}
