import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LifeCycleLastCutoverFinalized } from "./lifecyclelastcutoverfinalized";
import { LifeCycleLastCutoverInitiated } from "./lifecyclelastcutoverinitiated";
import { LifeCycleLastCutoverReverted } from "./lifecyclelastcutoverreverted";
/**
 * Lifecycle last Cutover .
**/
export declare class LifeCycleLastCutover extends SpeakeasyBase {
    finalized?: LifeCycleLastCutoverFinalized;
    initiated?: LifeCycleLastCutoverInitiated;
    reverted?: LifeCycleLastCutoverReverted;
}
