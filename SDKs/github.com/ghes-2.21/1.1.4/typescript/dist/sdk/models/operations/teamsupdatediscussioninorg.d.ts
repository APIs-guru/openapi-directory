import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsUpdateDiscussionInOrgPathParams extends SpeakeasyBase {
    discussionNumber: number;
    org: string;
    teamSlug: string;
}
export declare class TeamsUpdateDiscussionInOrgRequestBody extends SpeakeasyBase {
    body?: string;
    title?: string;
}
export declare class TeamsUpdateDiscussionInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsUpdateDiscussionInOrgPathParams;
    request?: TeamsUpdateDiscussionInOrgRequestBody;
}
export declare class TeamsUpdateDiscussionInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDiscussion?: shared.TeamDiscussion;
}
