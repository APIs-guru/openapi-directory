import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PregameWp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awayTeam" })
  awayTeam?: string;

  @SpeakeasyMetadata({ data: "json, name=gameId" })
  gameId?: number;

  @SpeakeasyMetadata({ data: "json, name=homeTeam" })
  homeTeam?: string;

  @SpeakeasyMetadata({ data: "json, name=homeWinProb" })
  homeWinProb?: number;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "json, name=seasonType" })
  seasonType?: string;

  @SpeakeasyMetadata({ data: "json, name=spread" })
  spread?: number;

  @SpeakeasyMetadata({ data: "json, name=week" })
  week?: number;
}
