import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DocumentDimensionsUnitEnum {
    DocumentDimensionUnitUnspecified = "DOCUMENT_DIMENSION_UNIT_UNSPECIFIED",
    Inch = "INCH",
    Centimeter = "CENTIMETER",
    Point = "POINT"
}


// DocumentDimensions
/** 
 * Message that describes dimension of a document.
**/
export class DocumentDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: DocumentDimensionsUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
