import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RtbMetrics
/** 
 * Real-time bidding metrics. For what each metric means refer to [Report metrics](https://support.google.com/adxbuyer/answer/6115195#report-metrics)
**/
export class RtbMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adImpressions7Days" })
  adImpressions7Days?: string;

  @SpeakeasyMetadata({ data: "json, name=bidRate7Days" })
  bidRate7Days?: number;

  @SpeakeasyMetadata({ data: "json, name=bidRequests7Days" })
  bidRequests7Days?: string;

  @SpeakeasyMetadata({ data: "json, name=bids7Days" })
  bids7Days?: string;

  @SpeakeasyMetadata({ data: "json, name=filteredBidRate7Days" })
  filteredBidRate7Days?: number;

  @SpeakeasyMetadata({ data: "json, name=mustBidRateCurrentMonth" })
  mustBidRateCurrentMonth?: number;
}
