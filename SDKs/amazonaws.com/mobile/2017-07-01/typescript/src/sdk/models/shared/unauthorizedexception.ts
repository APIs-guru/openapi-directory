import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UnauthorizedException
/** 
 *  Credentials of the caller are insufficient to authorize the request. 
**/
export class UnauthorizedException extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}
