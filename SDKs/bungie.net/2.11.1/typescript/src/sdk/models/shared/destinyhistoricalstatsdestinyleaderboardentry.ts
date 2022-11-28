import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo
/** 
 * Details about the player as they are known on BungieNet. This will be undefined if the player has marked their credential private, or does not have a BungieNet account.
**/
export class DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicableMembershipTypes?: number[];

  @SpeakeasyMetadata()
  crossSaveOverride?: number;

  @SpeakeasyMetadata()
  displayName?: string;

  @SpeakeasyMetadata()
  iconPath?: string;

  @SpeakeasyMetadata()
  isPublic?: boolean;

  @SpeakeasyMetadata()
  membershipId?: number;

  @SpeakeasyMetadata()
  membershipType?: number;

  @SpeakeasyMetadata()
  supplementalDisplayName?: string;
}


// DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo
/** 
 * Details about the player as they are known in game (platform display name, Destiny emblem)
**/
export class DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicableMembershipTypes?: number[];

  @SpeakeasyMetadata()
  crossSaveOverride?: number;

  @SpeakeasyMetadata()
  displayName?: string;

  @SpeakeasyMetadata()
  iconPath?: string;

  @SpeakeasyMetadata()
  isPublic?: boolean;

  @SpeakeasyMetadata()
  membershipId?: number;

  @SpeakeasyMetadata()
  membershipType?: number;

  @SpeakeasyMetadata()
  supplementalDisplayName?: string;
}


// DestinyHistoricalStatsDestinyLeaderboardEntryPlayer
/** 
 * Identity details of the player
**/
export class DestinyHistoricalStatsDestinyLeaderboardEntryPlayer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bungieNetUserInfo?: DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo;

  @SpeakeasyMetadata()
  characterClass?: string;

  @SpeakeasyMetadata()
  characterLevel?: number;

  @SpeakeasyMetadata()
  clanName?: string;

  @SpeakeasyMetadata()
  clanTag?: string;

  @SpeakeasyMetadata()
  classHash?: number;

  @SpeakeasyMetadata()
  destinyUserInfo?: DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo;

  @SpeakeasyMetadata()
  emblemHash?: number;

  @SpeakeasyMetadata()
  genderHash?: number;

  @SpeakeasyMetadata()
  lightLevel?: number;

  @SpeakeasyMetadata()
  raceHash?: number;
}


// DestinyHistoricalStatsDestinyLeaderboardEntryValueBasic
/** 
 * Basic stat value.
**/
export class DestinyHistoricalStatsDestinyLeaderboardEntryValueBasic extends SpeakeasyBase {
  @SpeakeasyMetadata()
  displayValue?: string;

  @SpeakeasyMetadata()
  value?: number;
}


// DestinyHistoricalStatsDestinyLeaderboardEntryValuePga
/** 
 * Per game average for the statistic, if applicable
**/
export class DestinyHistoricalStatsDestinyLeaderboardEntryValuePga extends SpeakeasyBase {
  @SpeakeasyMetadata()
  displayValue?: string;

  @SpeakeasyMetadata()
  value?: number;
}


// DestinyHistoricalStatsDestinyLeaderboardEntryValueWeighted
/** 
 * Weighted value of the stat if a weight greater than 1 has been assigned.
**/
export class DestinyHistoricalStatsDestinyLeaderboardEntryValueWeighted extends SpeakeasyBase {
  @SpeakeasyMetadata()
  displayValue?: string;

  @SpeakeasyMetadata()
  value?: number;
}


// DestinyHistoricalStatsDestinyLeaderboardEntryValue
/** 
 * Value of the stat for this player
**/
export class DestinyHistoricalStatsDestinyLeaderboardEntryValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityId?: number;

  @SpeakeasyMetadata()
  basic?: DestinyHistoricalStatsDestinyLeaderboardEntryValueBasic;

  @SpeakeasyMetadata()
  pga?: DestinyHistoricalStatsDestinyLeaderboardEntryValuePga;

  @SpeakeasyMetadata()
  statId?: string;

  @SpeakeasyMetadata()
  weighted?: DestinyHistoricalStatsDestinyLeaderboardEntryValueWeighted;
}


export class DestinyHistoricalStatsDestinyLeaderboardEntry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  characterId?: number;

  @SpeakeasyMetadata()
  player?: DestinyHistoricalStatsDestinyLeaderboardEntryPlayer;

  @SpeakeasyMetadata()
  rank?: number;

  @SpeakeasyMetadata()
  value?: DestinyHistoricalStatsDestinyLeaderboardEntryValue;
}
