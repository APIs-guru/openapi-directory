import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GameMedia extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awayConference" })
  awayConference?: string;

  @SpeakeasyMetadata({ data: "json, name=awayTeam" })
  awayTeam?: string;

  @SpeakeasyMetadata({ data: "json, name=homeConference" })
  homeConference?: string;

  @SpeakeasyMetadata({ data: "json, name=homeTeam" })
  homeTeam?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isStartTimeTBD" })
  isStartTimeTbd?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mediaType" })
  mediaType?: string;

  @SpeakeasyMetadata({ data: "json, name=outlet" })
  outlet?: string;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "json, name=seasonType" })
  seasonType?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=week" })
  week?: number;
}
