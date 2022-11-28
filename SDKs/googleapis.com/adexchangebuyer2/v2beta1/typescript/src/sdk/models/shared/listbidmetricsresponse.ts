import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BidMetricsRow } from "./bidmetricsrow";



// ListBidMetricsResponse
/** 
 * Response message for listing the metrics that are measured in number of bids.
**/
export class ListBidMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bidMetricsRows", elemType: BidMetricsRow })
  bidMetricsRows?: BidMetricsRow[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
