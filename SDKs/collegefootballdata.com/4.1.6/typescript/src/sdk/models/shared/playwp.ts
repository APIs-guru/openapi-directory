import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlayWp extends SpeakeasyBase {
  @Metadata({ data: "json, name=away" })
  away?: string;

  @Metadata({ data: "json, name=awayId" })
  awayId?: number;

  @Metadata({ data: "json, name=awayScore" })
  awayScore?: number;

  @Metadata({ data: "json, name=distance" })
  distance?: number;

  @Metadata({ data: "json, name=down" })
  down?: number;

  @Metadata({ data: "json, name=gamesId" })
  gamesId?: number;

  @Metadata({ data: "json, name=home" })
  home?: string;

  @Metadata({ data: "json, name=homeBall" })
  homeBall?: boolean;

  @Metadata({ data: "json, name=homeId" })
  homeId?: number;

  @Metadata({ data: "json, name=homeScore" })
  homeScore?: number;

  @Metadata({ data: "json, name=homeWinProb" })
  homeWinProb?: number;

  @Metadata({ data: "json, name=playId" })
  playId?: number;

  @Metadata({ data: "json, name=playNumber" })
  playNumber?: number;

  @Metadata({ data: "json, name=playText" })
  playText?: string;

  @Metadata({ data: "json, name=spread" })
  spread?: number;

  @Metadata({ data: "json, name=timeRemaining" })
  timeRemaining?: number;

  @Metadata({ data: "json, name=yardLine" })
  yardLine?: number;
}
