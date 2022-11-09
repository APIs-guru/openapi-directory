import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamMatchupGames extends SpeakeasyBase {
  @Metadata({ data: "json, name=awayScore" })
  awayScore?: number;

  @Metadata({ data: "json, name=awayTeam" })
  awayTeam?: string;

  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=homeScore" })
  homeScore?: number;

  @Metadata({ data: "json, name=homeTeam" })
  homeTeam?: string;

  @Metadata({ data: "json, name=neutralSite" })
  neutralSite?: boolean;

  @Metadata({ data: "json, name=season" })
  season?: number;

  @Metadata({ data: "json, name=season_type" })
  seasonType?: string;

  @Metadata({ data: "json, name=venue" })
  venue?: string;

  @Metadata({ data: "json, name=week" })
  week?: number;

  @Metadata({ data: "json, name=winner" })
  winner?: string;
}


export class TeamMatchup extends SpeakeasyBase {
  @Metadata({ data: "json, name=endYear" })
  endYear?: number;

  @Metadata({ data: "json, name=games", elemType: shared.TeamMatchupGames })
  games?: TeamMatchupGames[];

  @Metadata({ data: "json, name=startYear" })
  startYear?: number;

  @Metadata({ data: "json, name=team1" })
  team1?: string;

  @Metadata({ data: "json, name=team1Wins" })
  team1Wins?: number;

  @Metadata({ data: "json, name=team2" })
  team2?: string;

  @Metadata({ data: "json, name=team2Wins" })
  team2Wins?: number;

  @Metadata({ data: "json, name=ties" })
  ties?: number;
}
