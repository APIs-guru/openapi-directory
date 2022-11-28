import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetHostnameSuggestionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LayerId" })
  layerId: string;
}
