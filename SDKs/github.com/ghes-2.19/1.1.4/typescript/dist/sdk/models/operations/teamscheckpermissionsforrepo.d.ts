import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsCheckPermissionsForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    teamId: number;
}
export declare class TeamsCheckPermissionsForRepoRequest extends SpeakeasyBase {
    pathParams: TeamsCheckPermissionsForRepoPathParams;
}
export declare class TeamsCheckPermissionsForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    fullRepository?: shared.FullRepository;
    minimalRepository?: shared.MinimalRepository;
}
