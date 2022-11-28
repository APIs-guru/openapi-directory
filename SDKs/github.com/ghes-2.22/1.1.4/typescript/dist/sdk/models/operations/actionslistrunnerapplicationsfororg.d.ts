import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsListRunnerApplicationsForOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare class ActionsListRunnerApplicationsForOrgRequest extends SpeakeasyBase {
    pathParams: ActionsListRunnerApplicationsForOrgPathParams;
}
export declare class ActionsListRunnerApplicationsForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    runnerApplications?: shared.RunnerApplication[];
}
