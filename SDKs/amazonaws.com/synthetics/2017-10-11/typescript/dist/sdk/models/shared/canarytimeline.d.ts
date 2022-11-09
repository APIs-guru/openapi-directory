import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * This structure contains information about when the canary was created and modified.
**/
export declare class CanaryTimeline extends SpeakeasyBase {
    created?: Date;
    lastModified?: Date;
    lastStarted?: Date;
    lastStopped?: Date;
}
