import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchForTextResult } from "./searchfortextresult";
import { SearchPlaceIndexForTextSummary } from "./searchplaceindexfortextsummary";


export class SearchPlaceIndexForTextResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Results", elemType: shared.SearchForTextResult })
  results: SearchForTextResult[];

  @Metadata({ data: "json, name=Summary" })
  summary: SearchPlaceIndexForTextSummary;
}
