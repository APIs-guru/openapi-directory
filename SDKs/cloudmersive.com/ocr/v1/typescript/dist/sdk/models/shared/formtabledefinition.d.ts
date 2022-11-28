import { SpeakeasyBase } from "../../../internal/utils";
import { FormTableColumnDefinition } from "./formtablecolumndefinition";
/**
 * Definition of a form table for OCR data extraction from images
**/
export declare class FormTableDefinition extends SpeakeasyBase {
    columnDefinitions?: FormTableColumnDefinition[];
    tableId?: string;
    targetRowHeightRelative?: number;
    targetTableHeightRelative?: number;
}
