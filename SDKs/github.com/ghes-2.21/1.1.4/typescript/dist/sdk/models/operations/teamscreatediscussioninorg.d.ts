import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsCreateDiscussionInOrgPathParams extends SpeakeasyBase {
    org: string;
    teamSlug: string;
}
export declare class TeamsCreateDiscussionInOrgRequestBody extends SpeakeasyBase {
    body: string;
    private?: boolean;
    title: string;
}
export declare class TeamsCreateDiscussionInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsCreateDiscussionInOrgPathParams;
    request?: TeamsCreateDiscussionInOrgRequestBody;
}
export declare class TeamsCreateDiscussionInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDiscussion?: shared.TeamDiscussion;
}
