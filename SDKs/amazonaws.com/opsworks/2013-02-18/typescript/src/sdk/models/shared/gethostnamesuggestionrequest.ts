import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHostnameSuggestionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LayerId" })
  layerId: string;
}
