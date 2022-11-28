import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SupportedOperation
/** 
 * Describes the operations that are allowed on a maintenance track.
**/
export class SupportedOperation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  operationName?: string;
}
