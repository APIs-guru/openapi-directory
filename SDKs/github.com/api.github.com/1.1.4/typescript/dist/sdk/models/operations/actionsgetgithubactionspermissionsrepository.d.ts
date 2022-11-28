import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetGithubActionsPermissionsRepositoryPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActionsGetGithubActionsPermissionsRepositoryRequest extends SpeakeasyBase {
    pathParams: ActionsGetGithubActionsPermissionsRepositoryPathParams;
}
export declare class ActionsGetGithubActionsPermissionsRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    actionsRepositoryPermissions?: shared.ActionsRepositoryPermissions;
}
