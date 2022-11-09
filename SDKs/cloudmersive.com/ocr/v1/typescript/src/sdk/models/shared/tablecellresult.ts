import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OcrPhotoTextElement } from "./ocrphototextelement";


// TableCellResult
/** 
 * The recognition result of one cell in one row in a table of a form
**/
export class TableCellResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=CellValues", elemType: shared.OcrPhotoTextElement })
  cellValues?: OcrPhotoTextElement[];

  @Metadata({ data: "json, name=ColumnID" })
  columnId?: string;
}
