import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OnFailure } from "./onfailure";
import { OnSuccess } from "./onsuccess";


// DestinationConfig
/** 
 * A configuration object that specifies the destination of an event after Lambda processes it.
**/
export class DestinationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=OnFailure" })
  onFailure?: OnFailure;

  @Metadata({ data: "json, name=OnSuccess" })
  onSuccess?: OnSuccess;
}
