import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsCheckPermissionsForRepoInOrgPathParams extends SpeakeasyBase {
    org: string;
    owner: string;
    repo: string;
    teamSlug: string;
}
export declare class TeamsCheckPermissionsForRepoInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsCheckPermissionsForRepoInOrgPathParams;
}
export declare class TeamsCheckPermissionsForRepoInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamRepository?: shared.TeamRepository;
}
