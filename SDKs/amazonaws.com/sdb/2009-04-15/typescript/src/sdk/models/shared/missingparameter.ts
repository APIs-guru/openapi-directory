import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MissingParameter
/** 
 * The request must contain the specified missing parameter.
**/
export class MissingParameter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boxUsage?: number;
}
