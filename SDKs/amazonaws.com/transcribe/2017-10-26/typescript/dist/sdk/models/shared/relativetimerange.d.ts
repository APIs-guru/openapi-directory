import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that allows percentages to specify the proportion of the call where you would like to apply a filter. For example, you can specify the first half of the call. You can also specify the period of time between halfway through to three-quarters of the way through the call. Because the length of conversation can vary between calls, you can apply relative time ranges across all calls.
**/
export declare class RelativeTimeRange extends SpeakeasyBase {
    endPercentage?: number;
    first?: number;
    last?: number;
    startPercentage?: number;
}
