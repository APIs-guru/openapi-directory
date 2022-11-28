import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyHistoricalStatsDestinyHistoricalStatsValue } from "./destinyhistoricalstatsdestinyhistoricalstatsvalue";
import { DestinyHistoricalStatsDestinyHistoricalWeaponStats } from "./destinyhistoricalstatsdestinyhistoricalweaponstats";



// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended
/** 
 * Extended data extracted from the activity blob.
**/
export class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyHistoricalStatsValue })
  values?: Map<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;

  @SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyHistoricalWeaponStats })
  weapons?: DestinyHistoricalStatsDestinyHistoricalWeaponStats[];
}


// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo
/** 
 * Details about the player as they are known on BungieNet. This will be undefined if the player has marked their credential private, or does not have a BungieNet account.
**/
export class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo extends SpeakeasyBase {
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


// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo
/** 
 * Details about the player as they are known in game (platform display name, Destiny emblem)
**/
export class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo extends SpeakeasyBase {
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


// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer
/** 
 * Identity details of the player
**/
export class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bungieNetUserInfo?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo;

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
  destinyUserInfo?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo;

  @SpeakeasyMetadata()
  emblemHash?: number;

  @SpeakeasyMetadata()
  genderHash?: number;

  @SpeakeasyMetadata()
  lightLevel?: number;

  @SpeakeasyMetadata()
  raceHash?: number;
}


// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic
/** 
 * Basic stat value.
**/
export class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic extends SpeakeasyBase {
  @SpeakeasyMetadata()
  displayValue?: string;

  @SpeakeasyMetadata()
  value?: number;
}


// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga
/** 
 * Per game average for the statistic, if applicable
**/
export class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga extends SpeakeasyBase {
  @SpeakeasyMetadata()
  displayValue?: string;

  @SpeakeasyMetadata()
  value?: number;
}


// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted
/** 
 * Weighted value of the stat if a weight greater than 1 has been assigned.
**/
export class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted extends SpeakeasyBase {
  @SpeakeasyMetadata()
  displayValue?: string;

  @SpeakeasyMetadata()
  value?: number;
}


// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore
/** 
 * Score of the player if available
**/
export class DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityId?: number;

  @SpeakeasyMetadata()
  basic?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic;

  @SpeakeasyMetadata()
  pga?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga;

  @SpeakeasyMetadata()
  statId?: string;

  @SpeakeasyMetadata()
  weighted?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted;
}


export class DestinyHistoricalStatsDestinyPostGameCarnageReportEntry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  characterId?: number;

  @SpeakeasyMetadata()
  extended?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended;

  @SpeakeasyMetadata()
  player?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer;

  @SpeakeasyMetadata()
  score?: DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore;

  @SpeakeasyMetadata()
  standing?: number;

  @SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyHistoricalStatsValue })
  values?: Map<string, DestinyHistoricalStatsDestinyHistoricalStatsValue>;
}
