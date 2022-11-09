import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Cell
/** 
 * An occurrence of sensitive data detected in a Microsoft Excel workbook, comma-separated value (CSV) file, or tab-separated value (TSV) file.
**/
export class Cell extends SpeakeasyBase {
  @Metadata({ data: "json, name=CellReference" })
  cellReference?: string;

  @Metadata({ data: "json, name=Column" })
  column?: number;

  @Metadata({ data: "json, name=ColumnName" })
  columnName?: string;

  @Metadata({ data: "json, name=Row" })
  row?: number;
}
