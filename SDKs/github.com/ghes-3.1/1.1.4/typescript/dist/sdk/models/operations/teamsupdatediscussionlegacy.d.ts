import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsUpdateDiscussionLegacyPathParams extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsUpdateDiscussionLegacyRequestBody extends SpeakeasyBase {
    body?: string;
    title?: string;
}
export declare class TeamsUpdateDiscussionLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsUpdateDiscussionLegacyPathParams;
    request?: TeamsUpdateDiscussionLegacyRequestBody;
}
export declare class TeamsUpdateDiscussionLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDiscussion?: shared.TeamDiscussion;
}
