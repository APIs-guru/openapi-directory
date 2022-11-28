import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyPublicMilestoneActivityVariant } from "./destinymilestonesdestinypublicmilestoneactivityvariant";
import { DestinyMilestonesDestinyPublicMilestoneChallenge } from "./destinymilestonesdestinypublicmilestonechallenge";
/**
 * A milestone need not have an active activity, but if there is one it will be returned here, along with any variant and additional information.
**/
export declare class DestinyMilestonesDestinyPublicMilestoneQuestActivity extends SpeakeasyBase {
    activityHash?: number;
    activityModeHash?: number;
    activityModeType?: number;
    modifierHashes?: number[];
    variants?: DestinyMilestonesDestinyPublicMilestoneActivityVariant[];
}
export declare class DestinyMilestonesDestinyPublicMilestoneQuest extends SpeakeasyBase {
    activity?: DestinyMilestonesDestinyPublicMilestoneQuestActivity;
    challenges?: DestinyMilestonesDestinyPublicMilestoneChallenge[];
    questItemHash?: number;
}
