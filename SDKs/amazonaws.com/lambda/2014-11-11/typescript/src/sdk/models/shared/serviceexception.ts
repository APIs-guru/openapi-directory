import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceException
/** 
 * The AWS Lambda service encountered an internal error.
**/
export class ServiceException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
