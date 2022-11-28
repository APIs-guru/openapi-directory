import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InternalFailureException
/** 
 *  The service has encountered an unexpected error condition which prevents it from servicing the request. 
**/
export class InternalFailureException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
