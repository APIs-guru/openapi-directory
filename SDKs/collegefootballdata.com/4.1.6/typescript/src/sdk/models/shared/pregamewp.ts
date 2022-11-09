import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PregameWp extends SpeakeasyBase {
  @Metadata({ data: "json, name=awayTeam" })
  awayTeam?: string;

  @Metadata({ data: "json, name=gameId" })
  gameId?: number;

  @Metadata({ data: "json, name=homeTeam" })
  homeTeam?: string;

  @Metadata({ data: "json, name=homeWinProb" })
  homeWinProb?: number;

  @Metadata({ data: "json, name=season" })
  season?: number;

  @Metadata({ data: "json, name=seasonType" })
  seasonType?: string;

  @Metadata({ data: "json, name=spread" })
  spread?: number;

  @Metadata({ data: "json, name=week" })
  week?: number;
}
