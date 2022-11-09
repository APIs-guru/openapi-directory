import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GameLinesLines extends SpeakeasyBase {
  @Metadata({ data: "json, name=awayMoneyline" })
  awayMoneyline?: number;

  @Metadata({ data: "json, name=formattedSpread" })
  formattedSpread?: string;

  @Metadata({ data: "json, name=homeMoneyline" })
  homeMoneyline?: number;

  @Metadata({ data: "json, name=overUnder" })
  overUnder?: number;

  @Metadata({ data: "json, name=overUnderOpen" })
  overUnderOpen?: number;

  @Metadata({ data: "json, name=provider" })
  provider?: string;

  @Metadata({ data: "json, name=spread" })
  spread?: number;

  @Metadata({ data: "json, name=spreadOpen" })
  spreadOpen?: number;
}


export class GameLines extends SpeakeasyBase {
  @Metadata({ data: "json, name=awayConference" })
  awayConference?: string;

  @Metadata({ data: "json, name=awayScore" })
  awayScore?: number;

  @Metadata({ data: "json, name=awayTeam" })
  awayTeam?: string;

  @Metadata({ data: "json, name=homeConference" })
  homeConference?: string;

  @Metadata({ data: "json, name=homeScore" })
  homeScore?: number;

  @Metadata({ data: "json, name=homeTeam" })
  homeTeam?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lines", elemType: shared.GameLinesLines })
  lines?: GameLinesLines[];

  @Metadata({ data: "json, name=season" })
  season?: number;

  @Metadata({ data: "json, name=seasonType" })
  seasonType?: string;

  @Metadata({ data: "json, name=week" })
  week?: number;
}
