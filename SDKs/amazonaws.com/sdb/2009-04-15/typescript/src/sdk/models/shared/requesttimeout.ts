import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RequestTimeout
/** 
 * A timeout occurred when attempting to query the specified domain with specified query expression.
**/
export class RequestTimeout extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boxUsage?: number;
}
