import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Game extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attendance" })
  attendance?: number;

  @SpeakeasyMetadata({ data: "json, name=away_conference" })
  awayConference?: string;

  @SpeakeasyMetadata({ data: "json, name=away_id" })
  awayId?: number;

  @SpeakeasyMetadata({ data: "json, name=away_line_scores" })
  awayLineScores?: number[];

  @SpeakeasyMetadata({ data: "json, name=away_points" })
  awayPoints?: number;

  @SpeakeasyMetadata({ data: "json, name=away_post_win_prob" })
  awayPostWinProb?: number;

  @SpeakeasyMetadata({ data: "json, name=away_team" })
  awayTeam?: string;

  @SpeakeasyMetadata({ data: "json, name=conference_game" })
  conferenceGame?: boolean;

  @SpeakeasyMetadata({ data: "json, name=excitement_index" })
  excitementIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=highlights" })
  highlights?: string;

  @SpeakeasyMetadata({ data: "json, name=home_conference" })
  homeConference?: string;

  @SpeakeasyMetadata({ data: "json, name=home_id" })
  homeId?: number;

  @SpeakeasyMetadata({ data: "json, name=home_line_scores" })
  homeLineScores?: number[];

  @SpeakeasyMetadata({ data: "json, name=home_points" })
  homePoints?: number;

  @SpeakeasyMetadata({ data: "json, name=home_post_win_prob" })
  homePostWinProb?: number;

  @SpeakeasyMetadata({ data: "json, name=home_team" })
  homeTeam?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=neutral_site" })
  neutralSite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "json, name=season_type" })
  seasonType?: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=start_time_tbd" })
  startTimeTbd?: boolean;

  @SpeakeasyMetadata({ data: "json, name=venue" })
  venue?: string;

  @SpeakeasyMetadata({ data: "json, name=venue_id" })
  venueId?: number;

  @SpeakeasyMetadata({ data: "json, name=week" })
  week?: number;
}
