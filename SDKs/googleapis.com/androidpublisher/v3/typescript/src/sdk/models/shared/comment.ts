import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeveloperComment } from "./developercomment";
import { UserComment } from "./usercomment";


// Comment
/** 
 * An entry of conversation between user and developer.
**/
export class Comment extends SpeakeasyBase {
  @Metadata({ data: "json, name=developerComment" })
  developerComment?: DeveloperComment;

  @Metadata({ data: "json, name=userComment" })
  userComment?: UserComment;
}
