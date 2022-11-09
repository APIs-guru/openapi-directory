import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Cell } from "./cell";
import { Range } from "./range";
import { Range } from "./range";
import { Page } from "./page";
import { Record } from "./record";


// Occurrences
/** 
 * Specifies the location of 1-15 occurrences of sensitive data that was detected by a managed data identifier or a custom data identifier and produced a sensitive data finding.
**/
export class Occurrences extends SpeakeasyBase {
  @Metadata({ data: "json, name=cells", elemType: shared.Cell })
  cells?: Cell[];

  @Metadata({ data: "json, name=lineRanges", elemType: shared.Range })
  lineRanges?: Range[];

  @Metadata({ data: "json, name=offsetRanges", elemType: shared.Range })
  offsetRanges?: Range[];

  @Metadata({ data: "json, name=pages", elemType: shared.Page })
  pages?: Page[];

  @Metadata({ data: "json, name=records", elemType: shared.Record })
  records?: Record[];
}
