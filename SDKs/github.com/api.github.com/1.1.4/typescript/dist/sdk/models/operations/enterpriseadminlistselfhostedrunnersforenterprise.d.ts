import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
}
export declare class EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson extends SpeakeasyBase {
    runners?: shared.Runner[];
    totalCount?: number;
}
export declare class EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams;
    queryParams: EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams;
}
export declare class EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    enterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJsonObject?: EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJson;
}
