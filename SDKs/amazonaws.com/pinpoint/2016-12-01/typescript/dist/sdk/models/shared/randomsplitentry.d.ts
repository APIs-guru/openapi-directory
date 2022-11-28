import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the settings for a path in a random split activity in a journey.
**/
export declare class RandomSplitEntry extends SpeakeasyBase {
    nextActivity?: string;
    percentage?: number;
}
