import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Cell } from "./cell";


// Row
/** 
 * Row representation.
**/
export class Row extends SpeakeasyBase {
  @Metadata({ data: "json, name=cells", elemType: shared.Cell })
  cells?: Cell[];
}
