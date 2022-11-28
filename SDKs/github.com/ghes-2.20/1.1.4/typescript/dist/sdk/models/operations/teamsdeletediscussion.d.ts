import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsDeleteDiscussionPathParams extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsDeleteDiscussionRequest extends SpeakeasyBase {
    pathParams: TeamsDeleteDiscussionPathParams;
}
export declare class TeamsDeleteDiscussionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
