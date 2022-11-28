import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cell } from "./cell";



// Row
/** 
 * Row representation.
**/
export class Row extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cells", elemType: Cell })
  cells?: Cell[];
}
