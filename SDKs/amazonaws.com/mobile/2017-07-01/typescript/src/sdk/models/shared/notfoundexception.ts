import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotFoundException
/** 
 *  No entity can be found with the specified identifier. 
**/
export class NotFoundException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
