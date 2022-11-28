import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Real-time bidding metrics. For what each metric means refer to [Report metrics](https://support.google.com/adxbuyer/answer/6115195#report-metrics)
**/
export declare class RtbMetrics extends SpeakeasyBase {
    adImpressions7Days?: string;
    bidRate7Days?: number;
    bidRequests7Days?: string;
    bids7Days?: string;
    filteredBidRate7Days?: number;
    mustBidRateCurrentMonth?: number;
}
