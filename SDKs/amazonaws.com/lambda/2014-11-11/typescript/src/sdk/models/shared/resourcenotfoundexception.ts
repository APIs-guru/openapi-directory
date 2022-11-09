import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceNotFoundException
/** 
 * The function or the event source specified in the request does not exist.
**/
export class ResourceNotFoundException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
