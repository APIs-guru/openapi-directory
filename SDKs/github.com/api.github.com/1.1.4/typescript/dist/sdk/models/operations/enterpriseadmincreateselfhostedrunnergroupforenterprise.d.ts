import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
}
export declare enum EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum {
    Selected = "selected",
    All = "all"
}
export declare class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody extends SpeakeasyBase {
    name: string;
    runners?: number[];
    selectedOrganizationIds?: number[];
    visibility?: EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum;
}
export declare class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams;
    request?: EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody;
}
export declare class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    runnerGroupsEnterprise?: shared.RunnerGroupsEnterprise;
}
