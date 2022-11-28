import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsDeleteDiscussionPathParams extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsDeleteDiscussionHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class TeamsDeleteDiscussionRequest extends SpeakeasyBase {
    pathParams: TeamsDeleteDiscussionPathParams;
    headers: TeamsDeleteDiscussionHeaders;
}
export declare class TeamsDeleteDiscussionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
