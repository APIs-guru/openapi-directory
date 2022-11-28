import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
    runnerGroupId: number;
}
export declare enum EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum {
    Selected = "selected",
    All = "all"
}
export declare class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody extends SpeakeasyBase {
    name?: string;
    visibility?: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum;
}
export declare class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePathParams;
    request?: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody;
}
export declare class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    runnerGroupsEnterprise?: shared.RunnerGroupsEnterprise;
}
