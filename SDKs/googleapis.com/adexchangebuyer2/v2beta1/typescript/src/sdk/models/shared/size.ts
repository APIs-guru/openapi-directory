import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Size
/** 
 * Message depicting the size of the creative. The units of width and height depend on the type of the targeting.
**/
export class Size extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
