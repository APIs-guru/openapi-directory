import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FormTableDefinition } from "./formtabledefinition";
import { TableRowResult } from "./tablerowresult";


// TableResult
/** 
 * The result of reading a table via OCR from a form
**/
export class TableResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=TableDefinition" })
  tableDefinition?: FormTableDefinition;

  @Metadata({ data: "json, name=TableRowsResult", elemType: shared.TableRowResult })
  tableRowsResult?: TableRowResult[];
}
