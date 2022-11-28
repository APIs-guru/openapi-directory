import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MarketData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_timestamp" })
  endTimestamp?: number;

  @SpeakeasyMetadata({ data: "json, name=marketprice" })
  marketprice?: number;

  @SpeakeasyMetadata({ data: "json, name=start_timestamp" })
  startTimestamp?: number;
}
