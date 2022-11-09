import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StringHparamSearchSpace
/** 
 * Search space for string and enum.
**/
export class StringHparamSearchSpace extends SpeakeasyBase {
  @Metadata({ data: "json, name=candidates" })
  candidates?: string[];
}
