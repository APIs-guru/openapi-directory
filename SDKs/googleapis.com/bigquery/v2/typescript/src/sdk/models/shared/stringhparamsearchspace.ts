import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StringHparamSearchSpace
/** 
 * Search space for string and enum.
**/
export class StringHparamSearchSpace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=candidates" })
  candidates?: string[];
}
