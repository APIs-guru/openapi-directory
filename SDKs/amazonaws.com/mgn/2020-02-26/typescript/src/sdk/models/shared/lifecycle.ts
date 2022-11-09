import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LifeCycleLastCutover } from "./lifecyclelastcutover";
import { LifeCycleLastTest } from "./lifecyclelasttest";
import { LifeCycleStateEnum } from "./lifecyclestateenum";


// LifeCycle
/** 
 * Lifecycle.
**/
export class LifeCycle extends SpeakeasyBase {
  @Metadata({ data: "json, name=addedToServiceDateTime" })
  addedToServiceDateTime?: string;

  @Metadata({ data: "json, name=elapsedReplicationDuration" })
  elapsedReplicationDuration?: string;

  @Metadata({ data: "json, name=firstByteDateTime" })
  firstByteDateTime?: string;

  @Metadata({ data: "json, name=lastCutover" })
  lastCutover?: LifeCycleLastCutover;

  @Metadata({ data: "json, name=lastSeenByServiceDateTime" })
  lastSeenByServiceDateTime?: string;

  @Metadata({ data: "json, name=lastTest" })
  lastTest?: LifeCycleLastTest;

  @Metadata({ data: "json, name=state" })
  state?: LifeCycleStateEnum;
}
