import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricValue } from "./metricvalue";
import { RowDimensions } from "./rowdimensions";


// CreativeStatusRow
/** 
 * The number of bids with the specified dimension values that did not win the auction (either were filtered pre-auction or lost the auction), as described by the specified creative status.
**/
export class CreativeStatusRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=bidCount" })
  bidCount?: MetricValue;

  @Metadata({ data: "json, name=creativeStatusId" })
  creativeStatusId?: number;

  @Metadata({ data: "json, name=rowDimensions" })
  rowDimensions?: RowDimensions;
}
