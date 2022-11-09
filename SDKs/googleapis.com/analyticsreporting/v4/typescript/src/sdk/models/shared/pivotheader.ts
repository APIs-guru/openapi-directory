import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PivotHeaderEntry } from "./pivotheaderentry";


// PivotHeader
/** 
 * The headers for each of the pivot sections defined in the request.
**/
export class PivotHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=pivotHeaderEntries", elemType: shared.PivotHeaderEntry })
  pivotHeaderEntries?: PivotHeaderEntry[];

  @Metadata({ data: "json, name=totalPivotGroupsCount" })
  totalPivotGroupsCount?: number;
}
