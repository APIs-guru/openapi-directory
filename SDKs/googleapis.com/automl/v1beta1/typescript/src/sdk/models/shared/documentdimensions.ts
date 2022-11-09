import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DocumentDimensionsUnitEnum {
    DocumentDimensionUnitUnspecified = "DOCUMENT_DIMENSION_UNIT_UNSPECIFIED"
,    Inch = "INCH"
,    Centimeter = "CENTIMETER"
,    Point = "POINT"
}


// DocumentDimensions
/** 
 * Message that describes dimension of a document.
**/
export class DocumentDimensions extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=unit" })
  unit?: DocumentDimensionsUnitEnum;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
