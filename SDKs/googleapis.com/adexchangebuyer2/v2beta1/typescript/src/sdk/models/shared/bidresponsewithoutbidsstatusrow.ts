import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";


export enum BidResponseWithoutBidsStatusRowStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    ResponsesWithoutBids = "RESPONSES_WITHOUT_BIDS",
    ResponsesWithoutBidsForAccount = "RESPONSES_WITHOUT_BIDS_FOR_ACCOUNT",
    ResponsesWithoutBidsForDeal = "RESPONSES_WITHOUT_BIDS_FOR_DEAL"
}


// BidResponseWithoutBidsStatusRow
/** 
 * The number of impressions with the specified dimension values that were considered to have no applicable bids, as described by the specified status.
**/
export class BidResponseWithoutBidsStatusRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=impressionCount" })
  impressionCount?: MetricValue;

  @SpeakeasyMetadata({ data: "json, name=rowDimensions" })
  rowDimensions?: RowDimensions;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: BidResponseWithoutBidsStatusRowStatusEnum;
}
