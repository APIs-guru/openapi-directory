import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsCreateForTeamDiscussionCommentPathParams extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    teamId: number;
}
export declare class ReactionsCreateForTeamDiscussionCommentHeaders extends SpeakeasyBase {
    accept: string;
}
export declare enum ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForTeamDiscussionCommentRequestBody extends SpeakeasyBase {
    content: ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum;
}
export declare class ReactionsCreateForTeamDiscussionCommentRequest extends SpeakeasyBase {
    pathParams: ReactionsCreateForTeamDiscussionCommentPathParams;
    headers: ReactionsCreateForTeamDiscussionCommentHeaders;
    request?: ReactionsCreateForTeamDiscussionCommentRequestBody;
}
export declare class ReactionsCreateForTeamDiscussionCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reaction?: shared.Reaction;
}
