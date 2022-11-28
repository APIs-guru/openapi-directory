import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OcrPhotoTextElement } from "./ocrphototextelement";



// TableCellResult
/** 
 * The recognition result of one cell in one row in a table of a form
**/
export class TableCellResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CellValues", elemType: OcrPhotoTextElement })
  cellValues?: OcrPhotoTextElement[];

  @SpeakeasyMetadata({ data: "json, name=ColumnID" })
  columnId?: string;
}
