import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
}
export declare class EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody extends SpeakeasyBase {
    allowedActions?: shared.AllowedActionsEnum;
    enabledOrganizations: shared.EnabledOrganizationsEnum;
}
export declare class EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams;
    request?: EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody;
}
export declare class EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
