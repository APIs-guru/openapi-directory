import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminGetSelfHostedRunnerForEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
    runnerId: number;
}
export declare class EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminGetSelfHostedRunnerForEnterprisePathParams;
}
export declare class EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    runnerNoLabels?: shared.RunnerNoLabels;
}
