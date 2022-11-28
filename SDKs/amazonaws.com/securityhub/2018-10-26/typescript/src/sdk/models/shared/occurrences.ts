import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cell } from "./cell";
import { Range } from "./range";
import { Page } from "./page";
import { Record } from "./record";



// Occurrences
/** 
 * The detected occurrences of sensitive data.
**/
export class Occurrences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Cells", elemType: Cell })
  cells?: Cell[];

  @SpeakeasyMetadata({ data: "json, name=LineRanges", elemType: Range })
  lineRanges?: Range[];

  @SpeakeasyMetadata({ data: "json, name=OffsetRanges", elemType: Range })
  offsetRanges?: Range[];

  @SpeakeasyMetadata({ data: "json, name=Pages", elemType: Page })
  pages?: Page[];

  @SpeakeasyMetadata({ data: "json, name=Records", elemType: Record })
  records?: Record[];
}
