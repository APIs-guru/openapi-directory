import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyquestsdestinyobjectiveprogress";
/**
 * Data regarding the progress of a Quest for a specific character. Quests are composed of multiple steps, each with potentially multiple objectives: this QuestStatus will return Objective data for the *currently active* step in this quest.
**/
export declare class DestinyQuestsDestinyQuestStatus extends SpeakeasyBase {
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
