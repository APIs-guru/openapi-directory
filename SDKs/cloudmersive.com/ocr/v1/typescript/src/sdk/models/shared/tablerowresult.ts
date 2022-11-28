import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableCellResult } from "./tablecellresult";



// TableRowResult
/** 
 * One row of data in the resulting table
**/
export class TableRowResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TableRowCellsResult", elemType: TableCellResult })
  tableRowCellsResult?: TableCellResult[];
}
