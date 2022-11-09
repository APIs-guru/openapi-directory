import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegexPatternSetSummary } from "./regexpatternsetsummary";


export class ListRegexPatternSetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=RegexPatternSets", elemType: shared.RegexPatternSetSummary })
  regexPatternSets?: RegexPatternSetSummary[];
}
