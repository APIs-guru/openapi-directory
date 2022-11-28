import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetGithubActionsPermissionsOrganizationPathParams extends SpeakeasyBase {
    org: string;
}
export declare class ActionsGetGithubActionsPermissionsOrganizationRequest extends SpeakeasyBase {
    pathParams: ActionsGetGithubActionsPermissionsOrganizationPathParams;
}
export declare class ActionsGetGithubActionsPermissionsOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    actionsOrganizationPermissions?: shared.ActionsOrganizationPermissions;
}
