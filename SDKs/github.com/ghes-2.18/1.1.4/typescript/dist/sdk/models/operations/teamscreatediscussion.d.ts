import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsCreateDiscussionPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare class TeamsCreateDiscussionHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class TeamsCreateDiscussionRequestBody extends SpeakeasyBase {
    body: string;
    private?: boolean;
    title: string;
}
export declare class TeamsCreateDiscussionRequest extends SpeakeasyBase {
    pathParams: TeamsCreateDiscussionPathParams;
    headers: TeamsCreateDiscussionHeaders;
    request?: TeamsCreateDiscussionRequestBody;
}
export declare class TeamsCreateDiscussionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDiscussion?: shared.TeamDiscussion;
}
