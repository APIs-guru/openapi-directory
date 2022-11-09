import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Cell } from "./cell";
import { Range } from "./range";
import { Range } from "./range";
import { Page } from "./page";
import { Record } from "./record";


// Occurrences
/** 
 * The detected occurrences of sensitive data.
**/
export class Occurrences extends SpeakeasyBase {
  @Metadata({ data: "json, name=Cells", elemType: shared.Cell })
  cells?: Cell[];

  @Metadata({ data: "json, name=LineRanges", elemType: shared.Range })
  lineRanges?: Range[];

  @Metadata({ data: "json, name=OffsetRanges", elemType: shared.Range })
  offsetRanges?: Range[];

  @Metadata({ data: "json, name=Pages", elemType: shared.Page })
  pages?: Page[];

  @Metadata({ data: "json, name=Records", elemType: shared.Record })
  records?: Record[];
}
