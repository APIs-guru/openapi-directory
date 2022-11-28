import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Aspect
/** 
 * This type contains the name and values of a category aspect.
**/
export class Aspect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=localizedName" })
  localizedName?: string;

  @SpeakeasyMetadata({ data: "json, name=localizedValues" })
  localizedValues?: string[];
}
