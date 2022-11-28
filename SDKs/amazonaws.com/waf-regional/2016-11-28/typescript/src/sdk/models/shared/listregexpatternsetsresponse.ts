import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegexPatternSetSummary } from "./regexpatternsetsummary";



export class ListRegexPatternSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=RegexPatternSets", elemType: RegexPatternSetSummary })
  regexPatternSets?: RegexPatternSetSummary[];
}
