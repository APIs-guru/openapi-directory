import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegexMatchSetSummary } from "./regexmatchsetsummary";


export class ListRegexMatchSetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=RegexMatchSets", elemType: shared.RegexMatchSetSummary })
  regexMatchSets?: RegexMatchSetSummary[];
}
