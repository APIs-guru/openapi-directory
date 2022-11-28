import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SelectedActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=github_owned_allowed" })
  githubOwnedAllowed: boolean;

  @SpeakeasyMetadata({ data: "json, name=patterns_allowed" })
  patternsAllowed: string[];

  @SpeakeasyMetadata({ data: "json, name=verified_allowed" })
  verifiedAllowed: boolean;
}
