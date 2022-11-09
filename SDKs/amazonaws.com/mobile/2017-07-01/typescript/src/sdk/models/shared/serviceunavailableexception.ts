import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceUnavailableException
/** 
 *  The service is temporarily unavailable. The request should be retried after some time delay. 
**/
export class ServiceUnavailableException extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}
