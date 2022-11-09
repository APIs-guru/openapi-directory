import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TooManyRequestsException
/** 
 *  Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay. 
**/
export class TooManyRequestsException extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}
