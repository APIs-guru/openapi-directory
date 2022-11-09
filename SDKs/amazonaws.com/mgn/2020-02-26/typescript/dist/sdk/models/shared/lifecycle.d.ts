import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LifeCycleLastCutover } from "./lifecyclelastcutover";
import { LifeCycleLastTest } from "./lifecyclelasttest";
import { LifeCycleStateEnum } from "./lifecyclestateenum";
/**
 * Lifecycle.
**/
export declare class LifeCycle extends SpeakeasyBase {
    addedToServiceDateTime?: string;
    elapsedReplicationDuration?: string;
    firstByteDateTime?: string;
    lastCutover?: LifeCycleLastCutover;
    lastSeenByServiceDateTime?: string;
    lastTest?: LifeCycleLastTest;
    state?: LifeCycleStateEnum;
}
