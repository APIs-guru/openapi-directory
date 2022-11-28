import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GameLinesLines extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awayMoneyline" })
  awayMoneyline?: number;

  @SpeakeasyMetadata({ data: "json, name=formattedSpread" })
  formattedSpread?: string;

  @SpeakeasyMetadata({ data: "json, name=homeMoneyline" })
  homeMoneyline?: number;

  @SpeakeasyMetadata({ data: "json, name=overUnder" })
  overUnder?: number;

  @SpeakeasyMetadata({ data: "json, name=overUnderOpen" })
  overUnderOpen?: number;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "json, name=spread" })
  spread?: number;

  @SpeakeasyMetadata({ data: "json, name=spreadOpen" })
  spreadOpen?: number;
}


export class GameLines extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awayConference" })
  awayConference?: string;

  @SpeakeasyMetadata({ data: "json, name=awayScore" })
  awayScore?: number;

  @SpeakeasyMetadata({ data: "json, name=awayTeam" })
  awayTeam?: string;

  @SpeakeasyMetadata({ data: "json, name=homeConference" })
  homeConference?: string;

  @SpeakeasyMetadata({ data: "json, name=homeScore" })
  homeScore?: number;

  @SpeakeasyMetadata({ data: "json, name=homeTeam" })
  homeTeam?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lines", elemType: GameLinesLines })
  lines?: GameLinesLines[];

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "json, name=seasonType" })
  seasonType?: string;

  @SpeakeasyMetadata({ data: "json, name=week" })
  week?: number;
}
