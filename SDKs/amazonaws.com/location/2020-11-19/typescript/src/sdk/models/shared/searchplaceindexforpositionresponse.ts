import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchForPositionResult } from "./searchforpositionresult";
import { SearchPlaceIndexForPositionSummary } from "./searchplaceindexforpositionsummary";



export class SearchPlaceIndexForPositionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Results", elemType: SearchForPositionResult })
  results: SearchForPositionResult[];

  @SpeakeasyMetadata({ data: "json, name=Summary" })
  summary: SearchPlaceIndexForPositionSummary;
}
