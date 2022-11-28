import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminGetSelfHostedRunnerGroupForEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
    runnerGroupId: number;
}
export declare class EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminGetSelfHostedRunnerGroupForEnterprisePathParams;
}
export declare class EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    runnerGroupsEnterprise?: shared.RunnerGroupsEnterprise;
}
