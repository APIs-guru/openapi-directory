import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Dimensions
/** 
 * This complex type defines the dimensions of a package to be shipped.
**/
export class Dimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: string;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: string;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: string;
}
