import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Aspect
/** 
 * This type contains the name and values of a category aspect.
**/
export class Aspect extends SpeakeasyBase {
  @Metadata({ data: "json, name=localizedName" })
  localizedName?: string;

  @Metadata({ data: "json, name=localizedValues" })
  localizedValues?: string[];
}
