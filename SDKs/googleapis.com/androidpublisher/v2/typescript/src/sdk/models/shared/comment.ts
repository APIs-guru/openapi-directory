import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeveloperComment } from "./developercomment";
import { UserComment } from "./usercomment";



export class Comment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  developerComment?: DeveloperComment;

  @SpeakeasyMetadata()
  userComment?: UserComment;
}
