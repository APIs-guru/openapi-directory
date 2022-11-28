import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlayStatClock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=minutes" })
  minutes?: number;

  @SpeakeasyMetadata({ data: "json, name=seconds" })
  seconds?: number;
}


export class PlayStat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=athleteId" })
  athleteId?: number;

  @SpeakeasyMetadata({ data: "json, name=athleteName" })
  athleteName?: string;

  @SpeakeasyMetadata({ data: "json, name=clock" })
  clock?: PlayStatClock;

  @SpeakeasyMetadata({ data: "json, name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=down" })
  down?: number;

  @SpeakeasyMetadata({ data: "json, name=driveId" })
  driveId?: number;

  @SpeakeasyMetadata({ data: "json, name=gameId" })
  gameId?: number;

  @SpeakeasyMetadata({ data: "json, name=opponent" })
  opponent?: string;

  @SpeakeasyMetadata({ data: "json, name=opponentScore" })
  opponentScore?: number;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: number;

  @SpeakeasyMetadata({ data: "json, name=playId" })
  playId?: number;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "json, name=stat" })
  stat?: number;

  @SpeakeasyMetadata({ data: "json, name=statType" })
  statType?: string;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "json, name=teamScore" })
  teamScore?: number;

  @SpeakeasyMetadata({ data: "json, name=week" })
  week?: number;

  @SpeakeasyMetadata({ data: "json, name=yardsToGoal" })
  yardsToGoal?: number;
}
