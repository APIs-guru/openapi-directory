import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OnFailure
/** 
 * A destination for events that failed processing.
**/
export class OnFailure extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination?: string;
}
