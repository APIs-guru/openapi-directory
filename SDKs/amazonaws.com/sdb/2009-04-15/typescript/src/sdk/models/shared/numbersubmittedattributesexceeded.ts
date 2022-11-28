import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NumberSubmittedAttributesExceeded
/** 
 * Too many attributes exist in a single call.
**/
export class NumberSubmittedAttributesExceeded extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boxUsage?: number;
}
