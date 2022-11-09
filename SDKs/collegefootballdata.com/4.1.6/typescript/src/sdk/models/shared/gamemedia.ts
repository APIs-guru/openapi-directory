import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GameMedia extends SpeakeasyBase {
  @Metadata({ data: "json, name=awayConference" })
  awayConference?: string;

  @Metadata({ data: "json, name=awayTeam" })
  awayTeam?: string;

  @Metadata({ data: "json, name=homeConference" })
  homeConference?: string;

  @Metadata({ data: "json, name=homeTeam" })
  homeTeam?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isStartTimeTBD" })
  isStartTimeTbd?: boolean;

  @Metadata({ data: "json, name=mediaType" })
  mediaType?: string;

  @Metadata({ data: "json, name=outlet" })
  outlet?: string;

  @Metadata({ data: "json, name=season" })
  season?: number;

  @Metadata({ data: "json, name=seasonType" })
  seasonType?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=week" })
  week?: number;
}
