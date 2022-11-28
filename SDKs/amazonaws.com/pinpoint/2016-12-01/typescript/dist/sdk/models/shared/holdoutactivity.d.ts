import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the settings for a holdout activity in a journey. This type of activity stops a journey for a specified percentage of participants.
**/
export declare class HoldoutActivity extends SpeakeasyBase {
    nextActivity?: string;
    percentage: number;
}
