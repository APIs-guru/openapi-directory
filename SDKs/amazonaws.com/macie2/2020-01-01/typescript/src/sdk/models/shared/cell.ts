import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Cell
/** 
 * Specifies the location of an occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file.
**/
export class Cell extends SpeakeasyBase {
  @Metadata({ data: "json, name=cellReference" })
  cellReference?: string;

  @Metadata({ data: "json, name=column" })
  column?: number;

  @Metadata({ data: "json, name=columnName" })
  columnName?: string;

  @Metadata({ data: "json, name=row" })
  row?: number;
}
