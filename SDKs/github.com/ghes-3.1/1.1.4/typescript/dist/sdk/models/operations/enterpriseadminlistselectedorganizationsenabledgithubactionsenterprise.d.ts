import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
}
export declare class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJson extends SpeakeasyBase {
    organizations: shared.OrganizationSimple[];
    totalCount: number;
}
export declare class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams;
    queryParams: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams;
}
export declare class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    enterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJsonObject?: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJson;
}
