import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamMatchupGames extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awayScore" })
  awayScore?: number;

  @SpeakeasyMetadata({ data: "json, name=awayTeam" })
  awayTeam?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=homeScore" })
  homeScore?: number;

  @SpeakeasyMetadata({ data: "json, name=homeTeam" })
  homeTeam?: string;

  @SpeakeasyMetadata({ data: "json, name=neutralSite" })
  neutralSite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "json, name=season_type" })
  seasonType?: string;

  @SpeakeasyMetadata({ data: "json, name=venue" })
  venue?: string;

  @SpeakeasyMetadata({ data: "json, name=week" })
  week?: number;

  @SpeakeasyMetadata({ data: "json, name=winner" })
  winner?: string;
}


export class TeamMatchup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endYear" })
  endYear?: number;

  @SpeakeasyMetadata({ data: "json, name=games", elemType: TeamMatchupGames })
  games?: TeamMatchupGames[];

  @SpeakeasyMetadata({ data: "json, name=startYear" })
  startYear?: number;

  @SpeakeasyMetadata({ data: "json, name=team1" })
  team1?: string;

  @SpeakeasyMetadata({ data: "json, name=team1Wins" })
  team1Wins?: number;

  @SpeakeasyMetadata({ data: "json, name=team2" })
  team2?: string;

  @SpeakeasyMetadata({ data: "json, name=team2Wins" })
  team2Wins?: number;

  @SpeakeasyMetadata({ data: "json, name=ties" })
  ties?: number;
}
