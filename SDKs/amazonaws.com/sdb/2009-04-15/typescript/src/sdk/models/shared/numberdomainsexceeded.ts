import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NumberDomainsExceeded
/** 
 * Too many domains exist per this account.
**/
export class NumberDomainsExceeded extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boxUsage?: number;
}
