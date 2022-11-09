import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountActionRequiredException
/** 
 *  Account Action is required in order to continue the request. 
**/
export class AccountActionRequiredException extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}
