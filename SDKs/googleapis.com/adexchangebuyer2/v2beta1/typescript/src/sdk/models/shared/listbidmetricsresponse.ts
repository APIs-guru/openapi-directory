import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BidMetricsRow } from "./bidmetricsrow";


// ListBidMetricsResponse
/** 
 * Response message for listing the metrics that are measured in number of bids.
**/
export class ListBidMetricsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bidMetricsRows", elemType: shared.BidMetricsRow })
  bidMetricsRows?: BidMetricsRow[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
