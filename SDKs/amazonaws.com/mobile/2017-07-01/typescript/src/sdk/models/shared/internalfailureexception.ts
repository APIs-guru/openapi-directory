import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InternalFailureException
/** 
 *  The service has encountered an unexpected error condition which prevents it from servicing the request. 
**/
export class InternalFailureException extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}
