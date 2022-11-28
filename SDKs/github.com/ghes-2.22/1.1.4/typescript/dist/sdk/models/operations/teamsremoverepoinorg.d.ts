import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsRemoveRepoInOrgPathParams extends SpeakeasyBase {
    org: string;
    owner: string;
    repo: string;
    teamSlug: string;
}
export declare class TeamsRemoveRepoInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsRemoveRepoInOrgPathParams;
}
export declare class TeamsRemoveRepoInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
