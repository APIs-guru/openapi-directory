import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cell } from "./cell";
import { Range } from "./range";
import { Page } from "./page";
import { Record } from "./record";



// Occurrences
/** 
 * Specifies the location of 1-15 occurrences of sensitive data that was detected by a managed data identifier or a custom data identifier and produced a sensitive data finding.
**/
export class Occurrences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cells", elemType: Cell })
  cells?: Cell[];

  @SpeakeasyMetadata({ data: "json, name=lineRanges", elemType: Range })
  lineRanges?: Range[];

  @SpeakeasyMetadata({ data: "json, name=offsetRanges", elemType: Range })
  offsetRanges?: Range[];

  @SpeakeasyMetadata({ data: "json, name=pages", elemType: Page })
  pages?: Page[];

  @SpeakeasyMetadata({ data: "json, name=records", elemType: Record })
  records?: Record[];
}
