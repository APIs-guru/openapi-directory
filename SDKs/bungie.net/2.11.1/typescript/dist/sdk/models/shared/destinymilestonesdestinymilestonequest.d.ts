import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyMilestoneActivityVariant } from "./destinymilestonesdestinymilestoneactivityvariant";
import { DestinyChallengesDestinyChallengeStatus } from "./destinychallengesdestinychallengestatus";
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyquestsdestinyobjectiveprogress";
/**
 * *IF* the Milestone has an active Activity that can give you greater details about what you need to do, it will be returned here. Remember to associate this with the DestinyMilestoneDefinition's activities to get details about the activity, including what specific quest it is related to if you have multiple quests to choose from.
**/
export declare class DestinyMilestonesDestinyMilestoneQuestActivity extends SpeakeasyBase {
    activityHash?: number;
    activityModeHash?: number;
    activityModeType?: number;
    modifierHashes?: number[];
    variants?: DestinyMilestonesDestinyMilestoneActivityVariant[];
}
/**
 * The current status of the quest for the character making the request.
**/
export declare class DestinyMilestonesDestinyMilestoneQuestStatus extends SpeakeasyBase {
    completed?: boolean;
    itemInstanceId?: number;
    questHash?: number;
    redeemed?: boolean;
    started?: boolean;
    stepHash?: number;
    stepObjectives?: DestinyQuestsDestinyObjectiveProgress[];
    tracked?: boolean;
    vendorHash?: number;
}
/**
 * If a Milestone has one or more Quests, this will contain the live information for the character's status with one of those quests.
**/
export declare class DestinyMilestonesDestinyMilestoneQuest extends SpeakeasyBase {
    activity?: DestinyMilestonesDestinyMilestoneQuestActivity;
    challenges?: DestinyChallengesDestinyChallengeStatus[];
    questItemHash?: number;
    status?: DestinyMilestonesDestinyMilestoneQuestStatus;
}
