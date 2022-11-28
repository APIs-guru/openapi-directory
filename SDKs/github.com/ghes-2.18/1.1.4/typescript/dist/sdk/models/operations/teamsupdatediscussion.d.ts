import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsUpdateDiscussionPathParams extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsUpdateDiscussionHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class TeamsUpdateDiscussionRequestBody extends SpeakeasyBase {
    body?: string;
    title?: string;
}
export declare class TeamsUpdateDiscussionRequest extends SpeakeasyBase {
    pathParams: TeamsUpdateDiscussionPathParams;
    headers: TeamsUpdateDiscussionHeaders;
    request?: TeamsUpdateDiscussionRequestBody;
}
export declare class TeamsUpdateDiscussionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDiscussion?: shared.TeamDiscussion;
}
