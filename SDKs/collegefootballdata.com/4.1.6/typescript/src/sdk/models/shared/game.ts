import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Game extends SpeakeasyBase {
  @Metadata({ data: "json, name=attendance" })
  attendance?: number;

  @Metadata({ data: "json, name=away_conference" })
  awayConference?: string;

  @Metadata({ data: "json, name=away_id" })
  awayId?: number;

  @Metadata({ data: "json, name=away_line_scores" })
  awayLineScores?: number[];

  @Metadata({ data: "json, name=away_points" })
  awayPoints?: number;

  @Metadata({ data: "json, name=away_post_win_prob" })
  awayPostWinProb?: number;

  @Metadata({ data: "json, name=away_team" })
  awayTeam?: string;

  @Metadata({ data: "json, name=conference_game" })
  conferenceGame?: boolean;

  @Metadata({ data: "json, name=excitement_index" })
  excitementIndex?: number;

  @Metadata({ data: "json, name=highlights" })
  highlights?: string;

  @Metadata({ data: "json, name=home_conference" })
  homeConference?: string;

  @Metadata({ data: "json, name=home_id" })
  homeId?: number;

  @Metadata({ data: "json, name=home_line_scores" })
  homeLineScores?: number[];

  @Metadata({ data: "json, name=home_points" })
  homePoints?: number;

  @Metadata({ data: "json, name=home_post_win_prob" })
  homePostWinProb?: number;

  @Metadata({ data: "json, name=home_team" })
  homeTeam?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=neutral_site" })
  neutralSite?: boolean;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=season" })
  season?: number;

  @Metadata({ data: "json, name=season_type" })
  seasonType?: string;

  @Metadata({ data: "json, name=start_date" })
  startDate?: string;

  @Metadata({ data: "json, name=start_time_tbd" })
  startTimeTbd?: boolean;

  @Metadata({ data: "json, name=venue" })
  venue?: string;

  @Metadata({ data: "json, name=venue_id" })
  venueId?: number;

  @Metadata({ data: "json, name=week" })
  week?: number;
}
