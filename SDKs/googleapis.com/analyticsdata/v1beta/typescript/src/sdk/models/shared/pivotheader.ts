import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PivotDimensionHeader } from "./pivotdimensionheader";


// PivotHeader
/** 
 * Dimensions' values in a single pivot.
**/
export class PivotHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=pivotDimensionHeaders", elemType: shared.PivotDimensionHeader })
  pivotDimensionHeaders?: PivotDimensionHeader[];

  @Metadata({ data: "json, name=rowCount" })
  rowCount?: number;
}
