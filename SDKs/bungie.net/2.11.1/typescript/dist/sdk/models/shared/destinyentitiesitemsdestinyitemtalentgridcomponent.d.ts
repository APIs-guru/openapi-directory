import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyProgressionResetEntry } from "./destinydestinyprogressionresetentry";
import { DestinyDestinyTalentNode } from "./destinydestinytalentnode";
/**
 * If the item has a progression, it will be detailed here. A progression means that the item can gain experience. Thresholds of experience are what determines whether and when a talent node can be activated.
**/
export declare class DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression extends SpeakeasyBase {
    currentProgress?: number;
    currentResetCount?: number;
    dailyLimit?: number;
    dailyProgress?: number;
    level?: number;
    levelCap?: number;
    nextLevelAt?: number;
    progressToNextLevel?: number;
    progressionHash?: number;
    rewardItemStates?: number[];
    seasonResets?: DestinyDestinyProgressionResetEntry[];
    stepIndex?: number;
    weeklyLimit?: number;
    weeklyProgress?: number;
}
/**
 * Well, we're here in Destiny 2, and Talent Grids are unfortunately still around.
 * The good news is that they're pretty much only being used for certain base information on items and for Builds/Subclasses. The bad news is that they still suck. If you really want this information, grab this component.
 * An important note is that talent grids are defined as such:
 * A Grid has 1:M Nodes, which has 1:M Steps.
 * Any given node can only have a single step active at one time, which represents the actual visual contents and effects of the Node (for instance, if you see a "Super Cool Bonus" node, the actual icon and text for the node is coming from the current Step of that node).
 * Nodes can be grouped into exclusivity sets *and* as of D2, exclusivity groups (which are collections of exclusivity sets that affect each other).
 * See DestinyTalentGridDefinition for more information. Brace yourself, the water's cold out there in the deep end.
**/
export declare class DestinyEntitiesItemsDestinyItemTalentGridComponent extends SpeakeasyBase {
    gridProgression?: DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression;
    isGridComplete?: boolean;
    nodes?: DestinyDestinyTalentNode[];
    talentGridHash?: number;
}
