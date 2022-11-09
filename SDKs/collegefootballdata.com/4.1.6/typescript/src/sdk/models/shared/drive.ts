import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DriveEndTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=minutes" })
  minutes?: number;

  @Metadata({ data: "json, name=seconds" })
  seconds?: number;
}


export class DriveStartTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=minutes" })
  minutes?: number;

  @Metadata({ data: "json, name=seconds" })
  seconds?: number;
}


export class Drive extends SpeakeasyBase {
  @Metadata({ data: "json, name=defense" })
  defense?: string;

  @Metadata({ data: "json, name=defense_conference" })
  defenseConference?: string;

  @Metadata({ data: "json, name=drive_number" })
  driveNumber?: number;

  @Metadata({ data: "json, name=drive_result" })
  driveResult?: string;

  @Metadata({ data: "json, name=end_defense_score" })
  endDefenseScore?: number;

  @Metadata({ data: "json, name=end_offense_score" })
  endOffenseScore?: number;

  @Metadata({ data: "json, name=end_period" })
  endPeriod?: number;

  @Metadata({ data: "json, name=end_time" })
  endTime?: DriveEndTime;

  @Metadata({ data: "json, name=end_yardline" })
  endYardline?: number;

  @Metadata({ data: "json, name=end_yards_to_goal" })
  endYardsToGoal?: number;

  @Metadata({ data: "json, name=game_id" })
  gameId?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=is_home_offense" })
  isHomeOffense?: boolean;

  @Metadata({ data: "json, name=offense" })
  offense?: string;

  @Metadata({ data: "json, name=offense_conference" })
  offenseConference?: string;

  @Metadata({ data: "json, name=plays" })
  plays?: number;

  @Metadata({ data: "json, name=scoring" })
  scoring?: boolean;

  @Metadata({ data: "json, name=start_defense_score" })
  startDefenseScore?: number;

  @Metadata({ data: "json, name=start_offense_score" })
  startOffenseScore?: number;

  @Metadata({ data: "json, name=start_period" })
  startPeriod?: number;

  @Metadata({ data: "json, name=start_time" })
  startTime?: DriveStartTime;

  @Metadata({ data: "json, name=start_yardline" })
  startYardline?: number;

  @Metadata({ data: "json, name=start_yards_to_goal" })
  startYardsToGoal?: number;

  @Metadata({ data: "json, name=yards" })
  yards?: number;
}
