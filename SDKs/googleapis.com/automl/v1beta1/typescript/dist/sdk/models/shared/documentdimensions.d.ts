import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DocumentDimensionsUnitEnum {
    DocumentDimensionUnitUnspecified = "DOCUMENT_DIMENSION_UNIT_UNSPECIFIED",
    Inch = "INCH",
    Centimeter = "CENTIMETER",
    Point = "POINT"
}
/**
 * Message that describes dimension of a document.
**/
export declare class DocumentDimensions extends SpeakeasyBase {
    height?: number;
    unit?: DocumentDimensionsUnitEnum;
    width?: number;
}
