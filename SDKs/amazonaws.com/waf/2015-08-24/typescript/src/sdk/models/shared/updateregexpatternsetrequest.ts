import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegexPatternSetUpdate } from "./regexpatternsetupdate";


export class UpdateRegexPatternSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken: string;

  @Metadata({ data: "json, name=RegexPatternSetId" })
  regexPatternSetId: string;

  @Metadata({ data: "json, name=Updates", elemType: shared.RegexPatternSetUpdate })
  updates: RegexPatternSetUpdate[];
}
