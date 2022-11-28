import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
    runnerGroupId: number;
}
export declare class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJson extends SpeakeasyBase {
    organizations: shared.OrganizationSimple[];
    totalCount: number;
}
export declare class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams;
    queryParams: EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams;
}
export declare class EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    enterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJsonObject?: EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJson;
}
