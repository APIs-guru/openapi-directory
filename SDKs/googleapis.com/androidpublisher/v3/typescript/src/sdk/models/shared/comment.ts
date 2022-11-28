import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeveloperComment } from "./developercomment";
import { UserComment } from "./usercomment";



// Comment
/** 
 * An entry of conversation between user and developer.
**/
export class Comment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=developerComment" })
  developerComment?: DeveloperComment;

  @SpeakeasyMetadata({ data: "json, name=userComment" })
  userComment?: UserComment;
}
