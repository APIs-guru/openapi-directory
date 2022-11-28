import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LifeCycleLastCutover } from "./lifecyclelastcutover";
import { LifeCycleLastTest } from "./lifecyclelasttest";
import { LifeCycleStateEnum } from "./lifecyclestateenum";



// LifeCycle
/** 
 * Lifecycle.
**/
export class LifeCycle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addedToServiceDateTime" })
  addedToServiceDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=elapsedReplicationDuration" })
  elapsedReplicationDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=firstByteDateTime" })
  firstByteDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lastCutover" })
  lastCutover?: LifeCycleLastCutover;

  @SpeakeasyMetadata({ data: "json, name=lastSeenByServiceDateTime" })
  lastSeenByServiceDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lastTest" })
  lastTest?: LifeCycleLastTest;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: LifeCycleStateEnum;
}
