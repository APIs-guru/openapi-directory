import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LifeCycleLastTestFinalized } from "./lifecyclelasttestfinalized";
import { LifeCycleLastTestInitiated } from "./lifecyclelasttestinitiated";
import { LifeCycleLastTestReverted } from "./lifecyclelasttestreverted";
/**
 * Lifecycle last Test.
**/
export declare class LifeCycleLastTest extends SpeakeasyBase {
    finalized?: LifeCycleLastTestFinalized;
    initiated?: LifeCycleLastTestInitiated;
    reverted?: LifeCycleLastTestReverted;
}
