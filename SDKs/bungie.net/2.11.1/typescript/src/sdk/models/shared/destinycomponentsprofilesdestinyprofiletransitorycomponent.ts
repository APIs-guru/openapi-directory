import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyComponentsProfilesDestinyProfileTransitoryPartyMember } from "./destinycomponentsprofilesdestinyprofiletransitorypartymember";
import { DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry } from "./destinycomponentsprofilesdestinyprofiletransitorytrackingentry";



// DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity
/** 
 * If you are in an activity, this is some transitory info about the activity currently being played.
**/
export class DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  endTime?: Date;

  @SpeakeasyMetadata()
  highestOpposingFactionScore?: number;

  @SpeakeasyMetadata()
  numberOfOpponents?: number;

  @SpeakeasyMetadata()
  numberOfPlayers?: number;

  @SpeakeasyMetadata()
  score?: number;

  @SpeakeasyMetadata()
  startTime?: Date;
}


// DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability
/** 
 * Information about whether and what might prevent you from joining this person on a fireteam.
**/
export class DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability extends SpeakeasyBase {
  @SpeakeasyMetadata()
  closedReasons?: number;

  @SpeakeasyMetadata()
  openSlots?: number;

  @SpeakeasyMetadata()
  privacySetting?: number;
}


// DestinyComponentsProfilesDestinyProfileTransitoryComponent
/** 
 * This is an experimental set of data that Bungie considers to be "transitory" - information that may be useful for API users, but that is coming from a non-authoritative data source about information that could potentially change at a more frequent pace than Bungie.net will receive updates about it.
 * This information is provided exclusively for convenience should any of it be useful to users: we provide no guarantees to the accuracy or timeliness of data that comes from this source. Know that this data can potentially be out-of-date or even wrong entirely if the user disconnected from the game or suddenly changed their status before we can receive refreshed data.
**/
export class DestinyComponentsProfilesDestinyProfileTransitoryComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currentActivity?: DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity;

  @SpeakeasyMetadata()
  joinability?: DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability;

  @SpeakeasyMetadata()
  lastOrbitedDestinationHash?: number;

  @SpeakeasyMetadata({ elemType: DestinyComponentsProfilesDestinyProfileTransitoryPartyMember })
  partyMembers?: DestinyComponentsProfilesDestinyProfileTransitoryPartyMember[];

  @SpeakeasyMetadata({ elemType: DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry })
  tracking?: DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry[];
}
