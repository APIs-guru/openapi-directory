import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsDeleteDiscussionLegacyPathParams extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsDeleteDiscussionLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsDeleteDiscussionLegacyPathParams;
}
export declare class TeamsDeleteDiscussionLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
