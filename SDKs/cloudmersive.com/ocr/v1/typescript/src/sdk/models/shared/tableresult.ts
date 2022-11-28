import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FormTableDefinition } from "./formtabledefinition";
import { TableRowResult } from "./tablerowresult";



// TableResult
/** 
 * The result of reading a table via OCR from a form
**/
export class TableResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TableDefinition" })
  tableDefinition?: FormTableDefinition;

  @SpeakeasyMetadata({ data: "json, name=TableRowsResult", elemType: TableRowResult })
  tableRowsResult?: TableRowResult[];
}
