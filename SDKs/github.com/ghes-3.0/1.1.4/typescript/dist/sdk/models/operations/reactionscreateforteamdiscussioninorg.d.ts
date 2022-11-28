import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsCreateForTeamDiscussionInOrgPathParams extends SpeakeasyBase {
    discussionNumber: number;
    org: string;
    teamSlug: string;
}
export declare enum ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForTeamDiscussionInOrgRequestBody extends SpeakeasyBase {
    content: ReactionsCreateForTeamDiscussionInOrgRequestBodyContentEnum;
}
export declare class ReactionsCreateForTeamDiscussionInOrgRequest extends SpeakeasyBase {
    pathParams: ReactionsCreateForTeamDiscussionInOrgPathParams;
    request?: ReactionsCreateForTeamDiscussionInOrgRequestBody;
}
export declare class ReactionsCreateForTeamDiscussionInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reaction?: shared.Reaction;
}
