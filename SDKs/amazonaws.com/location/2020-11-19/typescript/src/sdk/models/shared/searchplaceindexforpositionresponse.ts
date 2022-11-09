import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchForPositionResult } from "./searchforpositionresult";
import { SearchPlaceIndexForPositionSummary } from "./searchplaceindexforpositionsummary";


export class SearchPlaceIndexForPositionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Results", elemType: shared.SearchForPositionResult })
  results: SearchForPositionResult[];

  @Metadata({ data: "json, name=Summary" })
  summary: SearchPlaceIndexForPositionSummary;
}
