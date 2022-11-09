import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetHostnameSuggestionResult
/** 
 * Contains the response to a <code>GetHostnameSuggestion</code> request.
**/
export class GetHostnameSuggestionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=LayerId" })
  layerId?: string;
}
