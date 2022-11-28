import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsCheckPermissionsForRepoLegacyPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    teamId: number;
}
export declare class TeamsCheckPermissionsForRepoLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsCheckPermissionsForRepoLegacyPathParams;
}
export declare class TeamsCheckPermissionsForRepoLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamRepository?: shared.TeamRepository;
}
