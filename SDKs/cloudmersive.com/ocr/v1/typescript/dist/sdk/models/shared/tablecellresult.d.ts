import { SpeakeasyBase } from "../../../internal/utils";
import { OcrPhotoTextElement } from "./ocrphototextelement";
/**
 * The recognition result of one cell in one row in a table of a form
**/
export declare class TableCellResult extends SpeakeasyBase {
    cellValues?: OcrPhotoTextElement[];
    columnId?: string;
}
