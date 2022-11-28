import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceException
/** 
 * The AWS Lambda service encountered an internal error.
**/
export class ServiceException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
