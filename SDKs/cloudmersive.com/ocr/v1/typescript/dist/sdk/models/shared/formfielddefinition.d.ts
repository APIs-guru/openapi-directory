import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Definition of a form field for OCR data extraction from images
**/
export declare class FormFieldDefinition extends SpeakeasyBase {
    allowNumericDigits?: boolean;
    alternateAnchor?: string;
    anchorMode?: string;
    bottomAnchor?: string;
    dataType?: string;
    fieldId?: string;
    horizontalAlignmentType?: string;
    ignore?: string[];
    leftAnchor?: string;
    minimumCharacterCount?: number;
    options?: string;
    targetDigitCount?: number;
    targetFieldHeightRelative?: number;
    targetFieldHorizontalAdjustment?: number;
    targetFieldVerticalAdjustment?: number;
    targetFieldWidthRelative?: number;
    topAnchor?: string;
    verticalAlignmentType?: string;
}
