import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountUsage
/** 
 * The number of functions and amount of storage in use.
**/
export class AccountUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=FunctionCount" })
  functionCount?: number;

  @Metadata({ data: "json, name=TotalCodeSize" })
  totalCodeSize?: number;
}
