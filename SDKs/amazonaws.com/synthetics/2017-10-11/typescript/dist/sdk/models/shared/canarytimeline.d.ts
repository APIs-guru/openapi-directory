import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This structure contains information about when the canary was created and modified.
**/
export declare class CanaryTimeline extends SpeakeasyBase {
    created?: Date;
    lastModified?: Date;
    lastStarted?: Date;
    lastStopped?: Date;
}
