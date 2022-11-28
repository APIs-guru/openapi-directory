import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsListRunnerApplicationsForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActionsListRunnerApplicationsForRepoRequest extends SpeakeasyBase {
    pathParams: ActionsListRunnerApplicationsForRepoPathParams;
}
export declare class ActionsListRunnerApplicationsForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    runnerApplications?: shared.RunnerApplication[];
}
