import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsDeleteDiscussionInOrgPathParams extends SpeakeasyBase {
    discussionNumber: number;
    org: string;
    teamSlug: string;
}
export declare class TeamsDeleteDiscussionInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsDeleteDiscussionInOrgPathParams;
}
export declare class TeamsDeleteDiscussionInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
