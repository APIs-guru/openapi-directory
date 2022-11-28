import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Cell
/** 
 * An occurrence of sensitive data detected in a Microsoft Excel workbook, comma-separated value (CSV) file, or tab-separated value (TSV) file.
**/
export class Cell extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CellReference" })
  cellReference?: string;

  @SpeakeasyMetadata({ data: "json, name=Column" })
  column?: number;

  @SpeakeasyMetadata({ data: "json, name=ColumnName" })
  columnName?: string;

  @SpeakeasyMetadata({ data: "json, name=Row" })
  row?: number;
}
