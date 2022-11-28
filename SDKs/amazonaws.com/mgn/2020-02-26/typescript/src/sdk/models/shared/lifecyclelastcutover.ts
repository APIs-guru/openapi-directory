import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LifeCycleLastCutoverFinalized } from "./lifecyclelastcutoverfinalized";
import { LifeCycleLastCutoverInitiated } from "./lifecyclelastcutoverinitiated";
import { LifeCycleLastCutoverReverted } from "./lifecyclelastcutoverreverted";



// LifeCycleLastCutover
/** 
 * Lifecycle last Cutover .
**/
export class LifeCycleLastCutover extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=finalized" })
  finalized?: LifeCycleLastCutoverFinalized;

  @SpeakeasyMetadata({ data: "json, name=initiated" })
  initiated?: LifeCycleLastCutoverInitiated;

  @SpeakeasyMetadata({ data: "json, name=reverted" })
  reverted?: LifeCycleLastCutoverReverted;
}
