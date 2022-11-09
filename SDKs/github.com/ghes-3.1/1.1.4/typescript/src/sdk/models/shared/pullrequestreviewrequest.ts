import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TeamSimple } from "./teamsimple";
import { SimpleUser } from "./simpleuser";


// PullRequestReviewRequest
/** 
 * Pull Request Review Request
**/
export class PullRequestReviewRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=teams", elemType: shared.TeamSimple })
  teams: TeamSimple[];

  @Metadata({ data: "json, name=users", elemType: shared.SimpleUser })
  users: SimpleUser[];
}
