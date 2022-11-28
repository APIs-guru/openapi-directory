import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReactionsDeleteForTeamDiscussionCommentPathParams extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    org: string;
    reactionId: number;
    teamSlug: string;
}
export declare class ReactionsDeleteForTeamDiscussionCommentRequest extends SpeakeasyBase {
    pathParams: ReactionsDeleteForTeamDiscussionCommentPathParams;
}
export declare class ReactionsDeleteForTeamDiscussionCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
