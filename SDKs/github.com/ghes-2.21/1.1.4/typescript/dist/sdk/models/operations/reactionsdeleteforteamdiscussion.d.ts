import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReactionsDeleteForTeamDiscussionPathParams extends SpeakeasyBase {
    discussionNumber: number;
    org: string;
    reactionId: number;
    teamSlug: string;
}
export declare class ReactionsDeleteForTeamDiscussionRequest extends SpeakeasyBase {
    pathParams: ReactionsDeleteForTeamDiscussionPathParams;
}
export declare class ReactionsDeleteForTeamDiscussionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
