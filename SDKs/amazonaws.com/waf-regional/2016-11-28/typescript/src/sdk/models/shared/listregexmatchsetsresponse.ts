import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegexMatchSetSummary } from "./regexmatchsetsummary";



export class ListRegexMatchSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=RegexMatchSets", elemType: RegexMatchSetSummary })
  regexMatchSets?: RegexMatchSetSummary[];
}
