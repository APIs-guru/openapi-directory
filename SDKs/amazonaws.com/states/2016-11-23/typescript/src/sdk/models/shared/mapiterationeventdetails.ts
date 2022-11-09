import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MapIterationEventDetails
/** 
 * Contains details about an iteration of a Map state.
**/
export class MapIterationEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
