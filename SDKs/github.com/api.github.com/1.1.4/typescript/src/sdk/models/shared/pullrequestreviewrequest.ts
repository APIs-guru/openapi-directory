import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TeamSimple } from "./teamsimple";
import { SimpleUser } from "./simpleuser";



// PullRequestReviewRequest
/** 
 * Pull Request Review Request
**/
export class PullRequestReviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=teams", elemType: TeamSimple })
  teams: TeamSimple[];

  @SpeakeasyMetadata({ data: "json, name=users", elemType: SimpleUser })
  users: SimpleUser[];
}
