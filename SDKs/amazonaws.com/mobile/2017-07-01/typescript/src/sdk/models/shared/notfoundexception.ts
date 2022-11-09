import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotFoundException
/** 
 *  No entity can be found with the specified identifier. 
**/
export class NotFoundException extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}
