import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";


export enum NonBillableWinningBidStatusRowStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    AdNotRendered = "AD_NOT_RENDERED",
    InvalidImpression = "INVALID_IMPRESSION",
    FatalVastError = "FATAL_VAST_ERROR",
    LostInMediation = "LOST_IN_MEDIATION"
}


// NonBillableWinningBidStatusRow
/** 
 * The number of winning bids with the specified dimension values for which the buyer was not billed, as described by the specified status.
**/
export class NonBillableWinningBidStatusRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bidCount" })
  bidCount?: MetricValue;

  @SpeakeasyMetadata({ data: "json, name=rowDimensions" })
  rowDimensions?: RowDimensions;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: NonBillableWinningBidStatusRowStatusEnum;
}
