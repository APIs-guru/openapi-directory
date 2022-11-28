import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetHostnameSuggestionResult
/** 
 * Contains the response to a <code>GetHostnameSuggestion</code> request.
**/
export class GetHostnameSuggestionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=LayerId" })
  layerId?: string;
}
