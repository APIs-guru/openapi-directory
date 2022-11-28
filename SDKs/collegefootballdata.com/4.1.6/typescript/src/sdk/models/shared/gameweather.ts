import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GameWeather extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awayConference" })
  awayConference?: string;

  @SpeakeasyMetadata({ data: "json, name=awayTeam" })
  awayTeam?: string;

  @SpeakeasyMetadata({ data: "json, name=dewPoint" })
  dewPoint?: number;

  @SpeakeasyMetadata({ data: "json, name=homeConference" })
  homeConference?: string;

  @SpeakeasyMetadata({ data: "json, name=homeTeam" })
  homeTeam?: string;

  @SpeakeasyMetadata({ data: "json, name=humidity" })
  humidity?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isStartTimeTBD" })
  isStartTimeTbd?: boolean;

  @SpeakeasyMetadata({ data: "json, name=precipitation" })
  precipitation?: number;

  @SpeakeasyMetadata({ data: "json, name=pressure" })
  pressure?: number;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "json, name=seasonType" })
  seasonType?: string;

  @SpeakeasyMetadata({ data: "json, name=snowfall" })
  snowfall?: number;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=temperature" })
  temperature?: number;

  @SpeakeasyMetadata({ data: "json, name=venue" })
  venue?: string;

  @SpeakeasyMetadata({ data: "json, name=venueId" })
  venueId?: number;

  @SpeakeasyMetadata({ data: "json, name=weatherCondition" })
  weatherCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=weatherConditionCode" })
  weatherConditionCode?: number;

  @SpeakeasyMetadata({ data: "json, name=week" })
  week?: number;

  @SpeakeasyMetadata({ data: "json, name=windDirection" })
  windDirection?: number;

  @SpeakeasyMetadata({ data: "json, name=windSpeed" })
  windSpeed?: number;
}
