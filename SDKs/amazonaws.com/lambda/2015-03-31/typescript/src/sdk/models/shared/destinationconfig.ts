import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OnFailure } from "./onfailure";
import { OnSuccess } from "./onsuccess";



// DestinationConfig
/** 
 * A configuration object that specifies the destination of an event after Lambda processes it.
**/
export class DestinationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OnFailure" })
  onFailure?: OnFailure;

  @SpeakeasyMetadata({ data: "json, name=OnSuccess" })
  onSuccess?: OnSuccess;
}
