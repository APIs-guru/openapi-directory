import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsSetGithubActionsPermissionsOrganizationPathParams extends SpeakeasyBase {
    org: string;
}
export declare class ActionsSetGithubActionsPermissionsOrganizationRequestBody extends SpeakeasyBase {
    allowedActions?: shared.AllowedActionsEnum;
    enabledRepositories: shared.EnabledRepositoriesEnum;
}
export declare class ActionsSetGithubActionsPermissionsOrganizationRequest extends SpeakeasyBase {
    pathParams: ActionsSetGithubActionsPermissionsOrganizationPathParams;
    request?: ActionsSetGithubActionsPermissionsOrganizationRequestBody;
}
export declare class ActionsSetGithubActionsPermissionsOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
