import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminListRunnerApplicationsForEnterprisePathParams extends SpeakeasyBase {
    enterprise: string;
}
export declare class EnterpriseAdminListRunnerApplicationsForEnterpriseRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminListRunnerApplicationsForEnterprisePathParams;
}
export declare class EnterpriseAdminListRunnerApplicationsForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    runnerApplications?: shared.RunnerApplication[];
}
