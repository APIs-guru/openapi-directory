import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BadRequestException
/** 
 *  The request cannot be processed because some parameter is not valid or the project state prevents the operation from being performed. 
**/
export class BadRequestException extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}
