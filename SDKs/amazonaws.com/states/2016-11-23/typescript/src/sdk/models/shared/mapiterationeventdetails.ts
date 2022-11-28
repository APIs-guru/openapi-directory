import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MapIterationEventDetails
/** 
 * Contains details about an iteration of a Map state.
**/
export class MapIterationEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
