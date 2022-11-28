import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlayClock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=minutes" })
  minutes?: number;

  @SpeakeasyMetadata({ data: "json, name=seconds" })
  seconds?: number;
}


export class Play extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=away" })
  away?: string;

  @SpeakeasyMetadata({ data: "json, name=clock" })
  clock?: PlayClock;

  @SpeakeasyMetadata({ data: "json, name=defense" })
  defense?: string;

  @SpeakeasyMetadata({ data: "json, name=defense_conference" })
  defenseConference?: string;

  @SpeakeasyMetadata({ data: "json, name=defense_score" })
  defenseScore?: number;

  @SpeakeasyMetadata({ data: "json, name=defense_timeouts" })
  defenseTimeouts?: number;

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=down" })
  down?: number;

  @SpeakeasyMetadata({ data: "json, name=drive_id" })
  driveId?: number;

  @SpeakeasyMetadata({ data: "json, name=drive_number" })
  driveNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=game_id" })
  gameId?: number;

  @SpeakeasyMetadata({ data: "json, name=home" })
  home?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=offense" })
  offense?: string;

  @SpeakeasyMetadata({ data: "json, name=offense_conference" })
  offenseConference?: string;

  @SpeakeasyMetadata({ data: "json, name=offense_score" })
  offenseScore?: number;

  @SpeakeasyMetadata({ data: "json, name=offense_timeouts" })
  offenseTimeouts?: number;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: number;

  @SpeakeasyMetadata({ data: "json, name=play_number" })
  playNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=play_text" })
  playText?: string;

  @SpeakeasyMetadata({ data: "json, name=play_type" })
  playType?: string;

  @SpeakeasyMetadata({ data: "json, name=ppa" })
  ppa?: number;

  @SpeakeasyMetadata({ data: "json, name=scoring" })
  scoring?: boolean;

  @SpeakeasyMetadata({ data: "json, name=wallclock" })
  wallclock?: string;

  @SpeakeasyMetadata({ data: "json, name=yard_line" })
  yardLine?: number;

  @SpeakeasyMetadata({ data: "json, name=yards_gained" })
  yardsGained?: number;

  @SpeakeasyMetadata({ data: "json, name=yards_to_goal" })
  yardsToGoal?: number;
}
