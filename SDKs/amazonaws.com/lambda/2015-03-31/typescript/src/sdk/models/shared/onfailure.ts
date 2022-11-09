import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OnFailure
/** 
 * A destination for events that failed processing.
**/
export class OnFailure extends SpeakeasyBase {
  @Metadata({ data: "json, name=Destination" })
  destination?: string;
}
