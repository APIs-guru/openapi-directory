import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Definition of a column within a table for OCR data extraction from images
**/
export declare class FormTableColumnDefinition extends SpeakeasyBase {
    allowNumericDigits?: boolean;
    anchorMode?: string;
    columnId?: string;
    dataType?: string;
    minimumCharacterCount?: number;
    topAnchor?: string;
}
