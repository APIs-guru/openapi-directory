import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RtbMetrics
/** 
 * Real-time bidding metrics. For what each metric means refer to [Report metrics](https://support.google.com/adxbuyer/answer/6115195#report-metrics)
**/
export class RtbMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=adImpressions7Days" })
  adImpressions7Days?: string;

  @Metadata({ data: "json, name=bidRate7Days" })
  bidRate7Days?: number;

  @Metadata({ data: "json, name=bidRequests7Days" })
  bidRequests7Days?: string;

  @Metadata({ data: "json, name=bids7Days" })
  bids7Days?: string;

  @Metadata({ data: "json, name=filteredBidRate7Days" })
  filteredBidRate7Days?: number;

  @Metadata({ data: "json, name=mustBidRateCurrentMonth" })
  mustBidRateCurrentMonth?: number;
}
