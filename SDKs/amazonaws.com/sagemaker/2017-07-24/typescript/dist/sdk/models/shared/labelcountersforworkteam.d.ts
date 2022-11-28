import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides counts for human-labeled tasks in the labeling job.
**/
export declare class LabelCountersForWorkteam extends SpeakeasyBase {
    humanLabeled?: number;
    pendingHuman?: number;
    total?: number;
}
