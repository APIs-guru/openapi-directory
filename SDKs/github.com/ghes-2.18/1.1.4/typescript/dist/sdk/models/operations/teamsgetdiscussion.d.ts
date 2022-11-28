import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsGetDiscussionPathParams extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsGetDiscussionHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class TeamsGetDiscussionRequest extends SpeakeasyBase {
    pathParams: TeamsGetDiscussionPathParams;
    headers: TeamsGetDiscussionHeaders;
}
export declare class TeamsGetDiscussionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDiscussion?: shared.TeamDiscussion;
}
