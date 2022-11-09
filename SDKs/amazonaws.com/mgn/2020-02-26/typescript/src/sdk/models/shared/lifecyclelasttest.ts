import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LifeCycleLastTestFinalized } from "./lifecyclelasttestfinalized";
import { LifeCycleLastTestInitiated } from "./lifecyclelasttestinitiated";
import { LifeCycleLastTestReverted } from "./lifecyclelasttestreverted";


// LifeCycleLastTest
/** 
 * Lifecycle last Test.
**/
export class LifeCycleLastTest extends SpeakeasyBase {
  @Metadata({ data: "json, name=finalized" })
  finalized?: LifeCycleLastTestFinalized;

  @Metadata({ data: "json, name=initiated" })
  initiated?: LifeCycleLastTestInitiated;

  @Metadata({ data: "json, name=reverted" })
  reverted?: LifeCycleLastTestReverted;
}
