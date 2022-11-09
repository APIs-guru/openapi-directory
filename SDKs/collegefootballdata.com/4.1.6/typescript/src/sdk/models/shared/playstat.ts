import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlayStatClock extends SpeakeasyBase {
  @Metadata({ data: "json, name=minutes" })
  minutes?: number;

  @Metadata({ data: "json, name=seconds" })
  seconds?: number;
}


export class PlayStat extends SpeakeasyBase {
  @Metadata({ data: "json, name=athleteId" })
  athleteId?: number;

  @Metadata({ data: "json, name=athleteName" })
  athleteName?: string;

  @Metadata({ data: "json, name=clock" })
  clock?: PlayStatClock;

  @Metadata({ data: "json, name=conference" })
  conference?: string;

  @Metadata({ data: "json, name=distance" })
  distance?: number;

  @Metadata({ data: "json, name=down" })
  down?: number;

  @Metadata({ data: "json, name=driveId" })
  driveId?: number;

  @Metadata({ data: "json, name=gameId" })
  gameId?: number;

  @Metadata({ data: "json, name=opponent" })
  opponent?: string;

  @Metadata({ data: "json, name=opponentScore" })
  opponentScore?: number;

  @Metadata({ data: "json, name=period" })
  period?: number;

  @Metadata({ data: "json, name=playId" })
  playId?: number;

  @Metadata({ data: "json, name=season" })
  season?: number;

  @Metadata({ data: "json, name=stat" })
  stat?: number;

  @Metadata({ data: "json, name=statType" })
  statType?: string;

  @Metadata({ data: "json, name=team" })
  team?: string;

  @Metadata({ data: "json, name=teamScore" })
  teamScore?: number;

  @Metadata({ data: "json, name=week" })
  week?: number;

  @Metadata({ data: "json, name=yardsToGoal" })
  yardsToGoal?: number;
}
