import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LifeCycleLastCutoverFinalized } from "./lifecyclelastcutoverfinalized";
import { LifeCycleLastCutoverInitiated } from "./lifecyclelastcutoverinitiated";
import { LifeCycleLastCutoverReverted } from "./lifecyclelastcutoverreverted";


// LifeCycleLastCutover
/** 
 * Lifecycle last Cutover .
**/
export class LifeCycleLastCutover extends SpeakeasyBase {
  @Metadata({ data: "json, name=finalized" })
  finalized?: LifeCycleLastCutoverFinalized;

  @Metadata({ data: "json, name=initiated" })
  initiated?: LifeCycleLastCutoverInitiated;

  @Metadata({ data: "json, name=reverted" })
  reverted?: LifeCycleLastCutoverReverted;
}
