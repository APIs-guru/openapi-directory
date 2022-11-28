import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsDeleteDiscussionCommentLegacyPathParams extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsDeleteDiscussionCommentLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsDeleteDiscussionCommentLegacyPathParams;
}
export declare class TeamsDeleteDiscussionCommentLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
