import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceNotFoundException
/** 
 * The function or the event source specified in the request does not exist.
**/
export class ResourceNotFoundException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
