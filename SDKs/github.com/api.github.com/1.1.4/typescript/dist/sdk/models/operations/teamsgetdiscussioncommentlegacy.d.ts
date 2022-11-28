import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsGetDiscussionCommentLegacyPathParams extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsGetDiscussionCommentLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsGetDiscussionCommentLegacyPathParams;
}
export declare class TeamsGetDiscussionCommentLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDiscussionComment?: shared.TeamDiscussionComment;
}
