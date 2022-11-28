import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyHistoricalStatsValue } from "./destinyhistoricalstatsdestinyhistoricalstatsvalue";
import { DestinyHistoricalStatsDestinyHistoricalWeaponStats } from "./destinyhistoricalstatsdestinyhistoricalweaponstats";
/**
 * Extended data extracted from the activity blob.
**/
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended extends SpeakeasyBase {
    values?: Map<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;
    weapons?: DestinyHistoricalStatsDestinyHistoricalWeaponStats[];
}
/**
 * Details about the player as they are known on BungieNet. This will be undefined if the player has marked their credential private, or does not have a BungieNet account.
**/
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo extends SpeakeasyBase {
    applicableMembershipTypes?: number[];
    crossSaveOverride?: number;
    displayName?: string;
    iconPath?: string;
    isPublic?: boolean;
    membershipId?: number;
    membershipType?: number;
    supplementalDisplayName?: string;
}
/**
 * Details about the player as they are known in game (platform display name, Destiny emblem)
**/
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo extends SpeakeasyBase {
    applicableMembershipTypes?: number[];
    crossSaveOverride?: number;
    displayName?: string;
    iconPath?: string;
    isPublic?: boolean;
    membershipId?: number;
    membershipType?: number;
    supplementalDisplayName?: string;
}
/**
 * Identity details of the player
**/
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer extends SpeakeasyBase {
    bungieNetUserInfo?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo;
    characterClass?: string;
    characterLevel?: number;
    clanName?: string;
    clanTag?: string;
    classHash?: number;
    destinyUserInfo?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo;
    emblemHash?: number;
    genderHash?: number;
    lightLevel?: number;
    raceHash?: number;
}
/**
 * Basic stat value.
**/
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic extends SpeakeasyBase {
    displayValue?: string;
    value?: number;
}
/**
 * Per game average for the statistic, if applicable
**/
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga extends SpeakeasyBase {
    displayValue?: string;
    value?: number;
}
/**
 * Weighted value of the stat if a weight greater than 1 has been assigned.
**/
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted extends SpeakeasyBase {
    displayValue?: string;
    value?: number;
}
/**
 * Score of the player if available
**/
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore extends SpeakeasyBase {
    activityId?: number;
    basic?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic;
    pga?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga;
    statId?: string;
    weighted?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted;
}
export declare class DestinyHistoricalStatsDestinyPostGameCarnageReportEntry extends SpeakeasyBase {
    characterId?: number;
    extended?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended;
    player?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer;
    score?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore;
    standing?: number;
    values?: Map<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;
}
