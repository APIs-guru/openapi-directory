import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsSetGithubActionsPermissionsRepositoryPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActionsSetGithubActionsPermissionsRepositoryRequestBody extends SpeakeasyBase {
    allowedActions?: shared.AllowedActionsEnum;
    enabled: boolean;
}
export declare class ActionsSetGithubActionsPermissionsRepositoryRequest extends SpeakeasyBase {
    pathParams: ActionsSetGithubActionsPermissionsRepositoryPathParams;
    request?: ActionsSetGithubActionsPermissionsRepositoryRequestBody;
}
export declare class ActionsSetGithubActionsPermissionsRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
