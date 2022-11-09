import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GameWeather extends SpeakeasyBase {
  @Metadata({ data: "json, name=awayConference" })
  awayConference?: string;

  @Metadata({ data: "json, name=awayTeam" })
  awayTeam?: string;

  @Metadata({ data: "json, name=dewPoint" })
  dewPoint?: number;

  @Metadata({ data: "json, name=homeConference" })
  homeConference?: string;

  @Metadata({ data: "json, name=homeTeam" })
  homeTeam?: string;

  @Metadata({ data: "json, name=humidity" })
  humidity?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isStartTimeTBD" })
  isStartTimeTbd?: boolean;

  @Metadata({ data: "json, name=precipitation" })
  precipitation?: number;

  @Metadata({ data: "json, name=pressure" })
  pressure?: number;

  @Metadata({ data: "json, name=season" })
  season?: number;

  @Metadata({ data: "json, name=seasonType" })
  seasonType?: string;

  @Metadata({ data: "json, name=snowfall" })
  snowfall?: number;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=temperature" })
  temperature?: number;

  @Metadata({ data: "json, name=venue" })
  venue?: string;

  @Metadata({ data: "json, name=venueId" })
  venueId?: number;

  @Metadata({ data: "json, name=weatherCondition" })
  weatherCondition?: string;

  @Metadata({ data: "json, name=weatherConditionCode" })
  weatherConditionCode?: number;

  @Metadata({ data: "json, name=week" })
  week?: number;

  @Metadata({ data: "json, name=windDirection" })
  windDirection?: number;

  @Metadata({ data: "json, name=windSpeed" })
  windSpeed?: number;
}
