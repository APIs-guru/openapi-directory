import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DriveEndTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=minutes" })
  minutes?: number;

  @SpeakeasyMetadata({ data: "json, name=seconds" })
  seconds?: number;
}


export class DriveStartTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=minutes" })
  minutes?: number;

  @SpeakeasyMetadata({ data: "json, name=seconds" })
  seconds?: number;
}


export class Drive extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defense" })
  defense?: string;

  @SpeakeasyMetadata({ data: "json, name=defense_conference" })
  defenseConference?: string;

  @SpeakeasyMetadata({ data: "json, name=drive_number" })
  driveNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=drive_result" })
  driveResult?: string;

  @SpeakeasyMetadata({ data: "json, name=end_defense_score" })
  endDefenseScore?: number;

  @SpeakeasyMetadata({ data: "json, name=end_offense_score" })
  endOffenseScore?: number;

  @SpeakeasyMetadata({ data: "json, name=end_period" })
  endPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: DriveEndTime;

  @SpeakeasyMetadata({ data: "json, name=end_yardline" })
  endYardline?: number;

  @SpeakeasyMetadata({ data: "json, name=end_yards_to_goal" })
  endYardsToGoal?: number;

  @SpeakeasyMetadata({ data: "json, name=game_id" })
  gameId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_home_offense" })
  isHomeOffense?: boolean;

  @SpeakeasyMetadata({ data: "json, name=offense" })
  offense?: string;

  @SpeakeasyMetadata({ data: "json, name=offense_conference" })
  offenseConference?: string;

  @SpeakeasyMetadata({ data: "json, name=plays" })
  plays?: number;

  @SpeakeasyMetadata({ data: "json, name=scoring" })
  scoring?: boolean;

  @SpeakeasyMetadata({ data: "json, name=start_defense_score" })
  startDefenseScore?: number;

  @SpeakeasyMetadata({ data: "json, name=start_offense_score" })
  startOffenseScore?: number;

  @SpeakeasyMetadata({ data: "json, name=start_period" })
  startPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: DriveStartTime;

  @SpeakeasyMetadata({ data: "json, name=start_yardline" })
  startYardline?: number;

  @SpeakeasyMetadata({ data: "json, name=start_yards_to_goal" })
  startYardsToGoal?: number;

  @SpeakeasyMetadata({ data: "json, name=yards" })
  yards?: number;
}
