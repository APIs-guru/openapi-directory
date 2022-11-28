import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsGetDiscussionLegacyPathParams extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsGetDiscussionLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsGetDiscussionLegacyPathParams;
}
export declare class TeamsGetDiscussionLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDiscussion?: shared.TeamDiscussion;
}
