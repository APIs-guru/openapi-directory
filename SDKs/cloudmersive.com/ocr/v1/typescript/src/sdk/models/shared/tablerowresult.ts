import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TableCellResult } from "./tablecellresult";


// TableRowResult
/** 
 * One row of data in the resulting table
**/
export class TableRowResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=TableRowCellsResult", elemType: shared.TableCellResult })
  tableRowCellsResult?: TableCellResult[];
}
