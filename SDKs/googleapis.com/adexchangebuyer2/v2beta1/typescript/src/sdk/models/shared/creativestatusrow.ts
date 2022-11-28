import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";



// CreativeStatusRow
/** 
 * The number of bids with the specified dimension values that did not win the auction (either were filtered pre-auction or lost the auction), as described by the specified creative status.
**/
export class CreativeStatusRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bidCount" })
  bidCount?: MetricValue;

  @SpeakeasyMetadata({ data: "json, name=creativeStatusId" })
  creativeStatusId?: number;

  @SpeakeasyMetadata({ data: "json, name=rowDimensions" })
  rowDimensions?: RowDimensions;
}
