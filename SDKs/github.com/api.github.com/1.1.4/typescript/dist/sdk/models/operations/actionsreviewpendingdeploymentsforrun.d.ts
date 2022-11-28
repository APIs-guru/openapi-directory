import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsReviewPendingDeploymentsForRunPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    runId: number;
}
export declare enum ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum {
    Approved = "approved",
    Rejected = "rejected"
}
export declare class ActionsReviewPendingDeploymentsForRunRequestBody extends SpeakeasyBase {
    comment: string;
    environmentIds: number[];
    state: ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum;
}
export declare class ActionsReviewPendingDeploymentsForRunRequest extends SpeakeasyBase {
    pathParams: ActionsReviewPendingDeploymentsForRunPathParams;
    request?: ActionsReviewPendingDeploymentsForRunRequestBody;
}
export declare class ActionsReviewPendingDeploymentsForRunResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deployments?: shared.Deployment[];
}
