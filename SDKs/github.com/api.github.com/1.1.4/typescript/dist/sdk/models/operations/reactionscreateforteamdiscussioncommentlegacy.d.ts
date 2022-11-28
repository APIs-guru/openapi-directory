import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsCreateForTeamDiscussionCommentLegacyPathParams extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    teamId: number;
}
export declare enum ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForTeamDiscussionCommentLegacyRequestBody extends SpeakeasyBase {
    content: ReactionsCreateForTeamDiscussionCommentLegacyRequestBodyContentEnum;
}
export declare class ReactionsCreateForTeamDiscussionCommentLegacyRequest extends SpeakeasyBase {
    pathParams: ReactionsCreateForTeamDiscussionCommentLegacyPathParams;
    request?: ReactionsCreateForTeamDiscussionCommentLegacyRequestBody;
}
export declare class ReactionsCreateForTeamDiscussionCommentLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reaction?: shared.Reaction;
}
