import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsCreateForTeamDiscussionCommentInOrgPathParams extends SpeakeasyBase {
    commentNumber: number;
    discussionNumber: number;
    org: string;
    teamSlug: string;
}
export declare enum ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForTeamDiscussionCommentInOrgRequestBody extends SpeakeasyBase {
    content: ReactionsCreateForTeamDiscussionCommentInOrgRequestBodyContentEnum;
}
export declare class ReactionsCreateForTeamDiscussionCommentInOrgRequest extends SpeakeasyBase {
    pathParams: ReactionsCreateForTeamDiscussionCommentInOrgPathParams;
    request?: ReactionsCreateForTeamDiscussionCommentInOrgRequestBody;
}
export declare class ReactionsCreateForTeamDiscussionCommentInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reaction?: shared.Reaction;
}
