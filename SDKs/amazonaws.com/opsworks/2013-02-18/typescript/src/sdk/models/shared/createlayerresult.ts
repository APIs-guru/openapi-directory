import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateLayerResult
/** 
 * Contains the response to a <code>CreateLayer</code> request.
**/
export class CreateLayerResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=LayerId" })
  layerId?: string;
}
