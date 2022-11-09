import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ForecastItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=co2_g_oekostrom" })
  co2GOekostrom?: number;

  @Metadata({ data: "json, name=energyprice" })
  energyprice?: number;

  @Metadata({ data: "json, name=epochtime" })
  epochtime?: number;

  @Metadata({ data: "json, name=gsi" })
  gsi?: number;

  @Metadata({ data: "json, name=scaled" })
  scaled?: boolean;

  @Metadata({ data: "json, name=sci" })
  sci?: number;

  @Metadata({ data: "json, name=timeStamp" })
  timeStamp?: number;
}
