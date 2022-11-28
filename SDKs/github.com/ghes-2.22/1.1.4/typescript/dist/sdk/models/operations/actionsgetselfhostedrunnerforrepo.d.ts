import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetSelfHostedRunnerForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    runnerId: number;
}
export declare class ActionsGetSelfHostedRunnerForRepoRequest extends SpeakeasyBase {
    pathParams: ActionsGetSelfHostedRunnerForRepoPathParams;
}
export declare class ActionsGetSelfHostedRunnerForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    runnerNoLabels?: shared.RunnerNoLabels;
}
