import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ForecastItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=co2_g_oekostrom" })
  co2GOekostrom?: number;

  @SpeakeasyMetadata({ data: "json, name=energyprice" })
  energyprice?: number;

  @SpeakeasyMetadata({ data: "json, name=epochtime" })
  epochtime?: number;

  @SpeakeasyMetadata({ data: "json, name=gsi" })
  gsi?: number;

  @SpeakeasyMetadata({ data: "json, name=scaled" })
  scaled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sci" })
  sci?: number;

  @SpeakeasyMetadata({ data: "json, name=timeStamp" })
  timeStamp?: number;
}
