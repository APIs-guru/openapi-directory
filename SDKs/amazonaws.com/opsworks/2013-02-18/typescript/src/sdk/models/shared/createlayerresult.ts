import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateLayerResult
/** 
 * Contains the response to a <code>CreateLayer</code> request.
**/
export class CreateLayerResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LayerId" })
  layerId?: string;
}
