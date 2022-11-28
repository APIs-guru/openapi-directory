import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PivotDimensionHeader } from "./pivotdimensionheader";



// PivotHeader
/** 
 * Dimensions' values in a single pivot.
**/
export class PivotHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pivotDimensionHeaders", elemType: PivotDimensionHeader })
  pivotDimensionHeaders?: PivotDimensionHeader[];

  @SpeakeasyMetadata({ data: "json, name=rowCount" })
  rowCount?: number;
}
