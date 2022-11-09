import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Size
/** 
 * Message depicting the size of the creative. The units of width and height depend on the type of the targeting.
**/
export class Size extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
