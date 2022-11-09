import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MarketData extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_timestamp" })
  endTimestamp?: number;

  @Metadata({ data: "json, name=marketprice" })
  marketprice?: number;

  @Metadata({ data: "json, name=start_timestamp" })
  startTimestamp?: number;
}
