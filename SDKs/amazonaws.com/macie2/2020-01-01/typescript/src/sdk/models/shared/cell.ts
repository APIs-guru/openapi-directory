import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Cell
/** 
 * Specifies the location of an occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file.
**/
export class Cell extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cellReference" })
  cellReference?: string;

  @SpeakeasyMetadata({ data: "json, name=column" })
  column?: number;

  @SpeakeasyMetadata({ data: "json, name=columnName" })
  columnName?: string;

  @SpeakeasyMetadata({ data: "json, name=row" })
  row?: number;
}
