import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";

export enum BidResponseWithoutBidsStatusRowStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED"
,    ResponsesWithoutBids = "RESPONSES_WITHOUT_BIDS"
,    ResponsesWithoutBidsForAccount = "RESPONSES_WITHOUT_BIDS_FOR_ACCOUNT"
,    ResponsesWithoutBidsForDeal = "RESPONSES_WITHOUT_BIDS_FOR_DEAL"
}


// BidResponseWithoutBidsStatusRow
/** 
 * The number of impressions with the specified dimension values that were considered to have no applicable bids, as described by the specified status.
**/
export class BidResponseWithoutBidsStatusRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=impressionCount" })
  impressionCount?: MetricValue;

  @Metadata({ data: "json, name=rowDimensions" })
  rowDimensions?: RowDimensions;

  @Metadata({ data: "json, name=status" })
  status?: BidResponseWithoutBidsStatusRowStatusEnum;
}
