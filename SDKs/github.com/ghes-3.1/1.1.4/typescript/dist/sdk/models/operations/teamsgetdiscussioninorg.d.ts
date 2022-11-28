import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsGetDiscussionInOrgPathParams extends SpeakeasyBase {
    discussionNumber: number;
    org: string;
    teamSlug: string;
}
export declare class TeamsGetDiscussionInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsGetDiscussionInOrgPathParams;
}
export declare class TeamsGetDiscussionInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDiscussion?: shared.TeamDiscussion;
}
