import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchForTextResult } from "./searchfortextresult";
import { SearchPlaceIndexForTextSummary } from "./searchplaceindexfortextsummary";



export class SearchPlaceIndexForTextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Results", elemType: SearchForTextResult })
  results: SearchForTextResult[];

  @SpeakeasyMetadata({ data: "json, name=Summary" })
  summary: SearchPlaceIndexForTextSummary;
}
