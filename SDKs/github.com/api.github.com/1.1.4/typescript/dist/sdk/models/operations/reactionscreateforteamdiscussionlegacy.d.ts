import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsCreateForTeamDiscussionLegacyPathParams extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare enum ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForTeamDiscussionLegacyRequestBody extends SpeakeasyBase {
    content: ReactionsCreateForTeamDiscussionLegacyRequestBodyContentEnum;
}
export declare class ReactionsCreateForTeamDiscussionLegacyRequest extends SpeakeasyBase {
    pathParams: ReactionsCreateForTeamDiscussionLegacyPathParams;
    request?: ReactionsCreateForTeamDiscussionLegacyRequestBody;
}
export declare class ReactionsCreateForTeamDiscussionLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reaction?: shared.Reaction;
}
