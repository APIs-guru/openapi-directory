import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsCreateForTeamDiscussionPathParams extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare class ReactionsCreateForTeamDiscussionHeaders extends SpeakeasyBase {
    accept: string;
}
export declare enum ReactionsCreateForTeamDiscussionRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForTeamDiscussionRequestBody extends SpeakeasyBase {
    content: ReactionsCreateForTeamDiscussionRequestBodyContentEnum;
}
export declare class ReactionsCreateForTeamDiscussionRequest extends SpeakeasyBase {
    pathParams: ReactionsCreateForTeamDiscussionPathParams;
    headers: ReactionsCreateForTeamDiscussionHeaders;
    request?: ReactionsCreateForTeamDiscussionRequestBody;
}
export declare class ReactionsCreateForTeamDiscussionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reaction?: shared.Reaction;
}
