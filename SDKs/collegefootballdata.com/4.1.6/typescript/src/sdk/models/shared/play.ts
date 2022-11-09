import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlayClock extends SpeakeasyBase {
  @Metadata({ data: "json, name=minutes" })
  minutes?: number;

  @Metadata({ data: "json, name=seconds" })
  seconds?: number;
}


export class Play extends SpeakeasyBase {
  @Metadata({ data: "json, name=away" })
  away?: string;

  @Metadata({ data: "json, name=clock" })
  clock?: PlayClock;

  @Metadata({ data: "json, name=defense" })
  defense?: string;

  @Metadata({ data: "json, name=defense_conference" })
  defenseConference?: string;

  @Metadata({ data: "json, name=defense_score" })
  defenseScore?: number;

  @Metadata({ data: "json, name=defense_timeouts" })
  defenseTimeouts?: number;

  @Metadata({ data: "json, name=distance" })
  distance?: number;

  @Metadata({ data: "json, name=down" })
  down?: number;

  @Metadata({ data: "json, name=drive_id" })
  driveId?: number;

  @Metadata({ data: "json, name=drive_number" })
  driveNumber?: number;

  @Metadata({ data: "json, name=game_id" })
  gameId?: number;

  @Metadata({ data: "json, name=home" })
  home?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=offense" })
  offense?: string;

  @Metadata({ data: "json, name=offense_conference" })
  offenseConference?: string;

  @Metadata({ data: "json, name=offense_score" })
  offenseScore?: number;

  @Metadata({ data: "json, name=offense_timeouts" })
  offenseTimeouts?: number;

  @Metadata({ data: "json, name=period" })
  period?: number;

  @Metadata({ data: "json, name=play_number" })
  playNumber?: number;

  @Metadata({ data: "json, name=play_text" })
  playText?: string;

  @Metadata({ data: "json, name=play_type" })
  playType?: string;

  @Metadata({ data: "json, name=ppa" })
  ppa?: number;

  @Metadata({ data: "json, name=scoring" })
  scoring?: boolean;

  @Metadata({ data: "json, name=wallclock" })
  wallclock?: string;

  @Metadata({ data: "json, name=yard_line" })
  yardLine?: number;

  @Metadata({ data: "json, name=yards_gained" })
  yardsGained?: number;

  @Metadata({ data: "json, name=yards_to_goal" })
  yardsToGoal?: number;
}
