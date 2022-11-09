import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Dimensions
/** 
 * This complex type defines the dimensions of a package to be shipped.
**/
export class Dimensions extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: string;

  @Metadata({ data: "json, name=length" })
  length?: string;

  @Metadata({ data: "json, name=unit" })
  unit?: string;

  @Metadata({ data: "json, name=width" })
  width?: string;
}
