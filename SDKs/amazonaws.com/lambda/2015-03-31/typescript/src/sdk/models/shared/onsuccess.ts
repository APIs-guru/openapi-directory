import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OnSuccess
/** 
 * A destination for events that were processed successfully.
**/
export class OnSuccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=Destination" })
  destination?: string;
}
