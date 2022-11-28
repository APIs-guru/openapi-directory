import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OnSuccess
/** 
 * A destination for events that were processed successfully.
**/
export class OnSuccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination?: string;
}
