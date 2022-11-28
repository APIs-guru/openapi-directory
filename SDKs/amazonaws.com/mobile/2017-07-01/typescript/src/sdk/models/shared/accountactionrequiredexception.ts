import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountActionRequiredException
/** 
 *  Account Action is required in order to continue the request. 
**/
export class AccountActionRequiredException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
