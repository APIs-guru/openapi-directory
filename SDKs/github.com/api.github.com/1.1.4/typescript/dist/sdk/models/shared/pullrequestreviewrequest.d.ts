import { SpeakeasyBase } from "../../../internal/utils";
import { TeamSimple } from "./teamsimple";
import { SimpleUser } from "./simpleuser";
/**
 * Pull Request Review Request
**/
export declare class PullRequestReviewRequest extends SpeakeasyBase {
    teams: TeamSimple[];
    users: SimpleUser[];
}
