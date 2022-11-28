import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LifeCycleLastTestFinalized } from "./lifecyclelasttestfinalized";
import { LifeCycleLastTestInitiated } from "./lifecyclelasttestinitiated";
import { LifeCycleLastTestReverted } from "./lifecyclelasttestreverted";



// LifeCycleLastTest
/** 
 * Lifecycle last Test.
**/
export class LifeCycleLastTest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=finalized" })
  finalized?: LifeCycleLastTestFinalized;

  @SpeakeasyMetadata({ data: "json, name=initiated" })
  initiated?: LifeCycleLastTestInitiated;

  @SpeakeasyMetadata({ data: "json, name=reverted" })
  reverted?: LifeCycleLastTestReverted;
}
