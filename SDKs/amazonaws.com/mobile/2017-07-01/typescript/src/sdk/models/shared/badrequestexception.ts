import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BadRequestException
/** 
 *  The request cannot be processed because some parameter is not valid or the project state prevents the operation from being performed. 
**/
export class BadRequestException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
