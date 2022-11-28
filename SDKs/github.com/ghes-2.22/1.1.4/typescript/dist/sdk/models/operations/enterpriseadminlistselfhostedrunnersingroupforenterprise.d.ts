import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
    runnerGroupId: number;
}
export declare class EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson extends SpeakeasyBase {
    runners: shared.RunnerNoLabels[];
    totalCount: number;
}
export declare class EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams;
    queryParams: EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams;
}
export declare class EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    enterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJsonObject?: EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJson;
}
