import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CanaryRun } from "./canaryrun";
/**
 * This structure contains information about the most recent run of a single canary.
**/
export declare class CanaryLastRun extends SpeakeasyBase {
    canaryName?: string;
    lastRun?: CanaryRun;
}
