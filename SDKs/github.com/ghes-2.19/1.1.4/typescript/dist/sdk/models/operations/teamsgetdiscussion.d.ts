import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsGetDiscussionPathParams extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsGetDiscussionRequest extends SpeakeasyBase {
    pathParams: TeamsGetDiscussionPathParams;
}
export declare class TeamsGetDiscussionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDiscussion?: shared.TeamDiscussion;
}
