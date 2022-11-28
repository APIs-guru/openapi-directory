import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountUsage
/** 
 * The number of functions and amount of storage in use.
**/
export class AccountUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FunctionCount" })
  functionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalCodeSize" })
  totalCodeSize?: number;
}
