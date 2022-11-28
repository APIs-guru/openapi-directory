import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnauthorizedException
/** 
 *  Credentials of the caller are insufficient to authorize the request. 
**/
export class UnauthorizedException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
