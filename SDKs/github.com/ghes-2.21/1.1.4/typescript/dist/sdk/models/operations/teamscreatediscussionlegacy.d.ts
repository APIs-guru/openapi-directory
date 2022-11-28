import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsCreateDiscussionLegacyPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare class TeamsCreateDiscussionLegacyRequestBody extends SpeakeasyBase {
    body: string;
    private?: boolean;
    title: string;
}
export declare class TeamsCreateDiscussionLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsCreateDiscussionLegacyPathParams;
    request?: TeamsCreateDiscussionLegacyRequestBody;
}
export declare class TeamsCreateDiscussionLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDiscussion?: shared.TeamDiscussion;
}
