import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamsRemoveProjectInOrgPathParams extends SpeakeasyBase {
    org: string;
    projectId: number;
    teamSlug: string;
}
export declare class TeamsRemoveProjectInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsRemoveProjectInOrgPathParams;
}
export declare class TeamsRemoveProjectInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
