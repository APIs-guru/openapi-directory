import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsDeleteDiscussionCommentPathParams extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsDeleteDiscussionCommentRequest extends SpeakeasyBase {
    pathParams: TeamsDeleteDiscussionCommentPathParams;
}
export declare class TeamsDeleteDiscussionCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
