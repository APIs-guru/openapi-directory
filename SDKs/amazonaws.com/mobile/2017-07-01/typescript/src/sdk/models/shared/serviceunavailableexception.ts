import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceUnavailableException
/** 
 *  The service is temporarily unavailable. The request should be retried after some time delay. 
**/
export class ServiceUnavailableException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
