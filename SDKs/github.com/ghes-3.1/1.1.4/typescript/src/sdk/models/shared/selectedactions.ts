import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SelectedActions extends SpeakeasyBase {
  @Metadata({ data: "json, name=github_owned_allowed" })
  githubOwnedAllowed: boolean;

  @Metadata({ data: "json, name=patterns_allowed" })
  patternsAllowed: string[];
}
