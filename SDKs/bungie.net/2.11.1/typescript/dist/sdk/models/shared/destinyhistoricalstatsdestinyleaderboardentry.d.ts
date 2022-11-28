import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about the player as they are known on BungieNet. This will be undefined if the player has marked their credential private, or does not have a BungieNet account.
**/
export declare class DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo extends SpeakeasyBase {
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
export declare class DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo extends SpeakeasyBase {
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
export declare class DestinyHistoricalStatsDestinyLeaderboardEntryPlayer extends SpeakeasyBase {
    bungieNetUserInfo?: DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo;
    characterClass?: string;
    characterLevel?: number;
    clanName?: string;
    clanTag?: string;
    classHash?: number;
    destinyUserInfo?: DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo;
    emblemHash?: number;
    genderHash?: number;
    lightLevel?: number;
    raceHash?: number;
}
/**
 * Basic stat value.
**/
export declare class DestinyHistoricalStatsDestinyLeaderboardEntryValueBasic extends SpeakeasyBase {
    displayValue?: string;
    value?: number;
}
/**
 * Per game average for the statistic, if applicable
**/
export declare class DestinyHistoricalStatsDestinyLeaderboardEntryValuePga extends SpeakeasyBase {
    displayValue?: string;
    value?: number;
}
/**
 * Weighted value of the stat if a weight greater than 1 has been assigned.
**/
export declare class DestinyHistoricalStatsDestinyLeaderboardEntryValueWeighted extends SpeakeasyBase {
    displayValue?: string;
    value?: number;
}
/**
 * Value of the stat for this player
**/
export declare class DestinyHistoricalStatsDestinyLeaderboardEntryValue extends SpeakeasyBase {
    activityId?: number;
    basic?: DestinyHistoricalStatsDestinyLeaderboardEntryValueBasic;
    pga?: DestinyHistoricalStatsDestinyLeaderboardEntryValuePga;
    statId?: string;
    weighted?: DestinyHistoricalStatsDestinyLeaderboardEntryValueWeighted;
}
export declare class DestinyHistoricalStatsDestinyLeaderboardEntry extends SpeakeasyBase {
    characterId?: number;
    player?: DestinyHistoricalStatsDestinyLeaderboardEntryPlayer;
    rank?: number;
    value?: DestinyHistoricalStatsDestinyLeaderboardEntryValue;
}
