import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
    runnerGroupId: number;
    runnerId: number;
}
export declare class EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams;
}
export declare class EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
