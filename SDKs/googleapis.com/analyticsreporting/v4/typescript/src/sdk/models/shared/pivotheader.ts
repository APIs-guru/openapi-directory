import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PivotHeaderEntry } from "./pivotheaderentry";



// PivotHeader
/** 
 * The headers for each of the pivot sections defined in the request.
**/
export class PivotHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pivotHeaderEntries", elemType: PivotHeaderEntry })
  pivotHeaderEntries?: PivotHeaderEntry[];

  @SpeakeasyMetadata({ data: "json, name=totalPivotGroupsCount" })
  totalPivotGroupsCount?: number;
}
