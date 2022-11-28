import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
    runnerGroupId: number;
    runnerId: number;
}
export declare class EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprisePathParams;
}
export declare class EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
