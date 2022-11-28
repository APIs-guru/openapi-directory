import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyProgressionResetEntry } from "./destinydestinyprogressionresetentry";
/**
 * If the Vendor has a related Reputation, this is the Progression data that represents the character's Reputation level with this Vendor.
**/
export declare class DestinyEntitiesVendorsDestinyVendorComponentProgression extends SpeakeasyBase {
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
 * This component contains essential/summary information about the vendor.
**/
export declare class DestinyEntitiesVendorsDestinyVendorComponent extends SpeakeasyBase {
    canPurchase?: boolean;
    enabled?: boolean;
    nextRefreshDate?: Date;
    progression?: DestinyEntitiesVendorsDestinyVendorComponentProgression;
    seasonalRank?: number;
    vendorHash?: number;
    vendorLocationIndex?: number;
}
