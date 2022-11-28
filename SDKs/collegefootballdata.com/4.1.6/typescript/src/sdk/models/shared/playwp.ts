import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlayWp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=away" })
  away?: string;

  @SpeakeasyMetadata({ data: "json, name=awayId" })
  awayId?: number;

  @SpeakeasyMetadata({ data: "json, name=awayScore" })
  awayScore?: number;

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=down" })
  down?: number;

  @SpeakeasyMetadata({ data: "json, name=gamesId" })
  gamesId?: number;

  @SpeakeasyMetadata({ data: "json, name=home" })
  home?: string;

  @SpeakeasyMetadata({ data: "json, name=homeBall" })
  homeBall?: boolean;

  @SpeakeasyMetadata({ data: "json, name=homeId" })
  homeId?: number;

  @SpeakeasyMetadata({ data: "json, name=homeScore" })
  homeScore?: number;

  @SpeakeasyMetadata({ data: "json, name=homeWinProb" })
  homeWinProb?: number;

  @SpeakeasyMetadata({ data: "json, name=playId" })
  playId?: number;

  @SpeakeasyMetadata({ data: "json, name=playNumber" })
  playNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=playText" })
  playText?: string;

  @SpeakeasyMetadata({ data: "json, name=spread" })
  spread?: number;

  @SpeakeasyMetadata({ data: "json, name=timeRemaining" })
  timeRemaining?: number;

  @SpeakeasyMetadata({ data: "json, name=yardLine" })
  yardLine?: number;
}
