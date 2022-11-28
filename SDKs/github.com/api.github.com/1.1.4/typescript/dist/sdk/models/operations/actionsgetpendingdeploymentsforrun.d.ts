import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetPendingDeploymentsForRunPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    runId: number;
}
export declare class ActionsGetPendingDeploymentsForRunRequest extends SpeakeasyBase {
    pathParams: ActionsGetPendingDeploymentsForRunPathParams;
}
export declare class ActionsGetPendingDeploymentsForRunResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pendingDeployments?: shared.PendingDeployment[];
}
