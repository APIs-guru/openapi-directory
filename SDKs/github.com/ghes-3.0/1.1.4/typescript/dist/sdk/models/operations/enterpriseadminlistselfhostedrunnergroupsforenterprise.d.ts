import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
}
export declare class EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson extends SpeakeasyBase {
    runnerGroups: shared.RunnerGroupsEnterprise[];
    totalCount: number;
}
export declare class EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams;
    queryParams: EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams;
}
export declare class EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    enterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJsonObject?: EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJson;
}
