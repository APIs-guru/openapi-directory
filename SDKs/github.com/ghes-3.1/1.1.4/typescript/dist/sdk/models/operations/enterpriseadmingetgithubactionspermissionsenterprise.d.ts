import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminGetGithubActionsPermissionsEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
}
export declare class EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminGetGithubActionsPermissionsEnterprisePathParams;
}
export declare class EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    actionsEnterprisePermissions?: shared.ActionsEnterprisePermissions;
}
