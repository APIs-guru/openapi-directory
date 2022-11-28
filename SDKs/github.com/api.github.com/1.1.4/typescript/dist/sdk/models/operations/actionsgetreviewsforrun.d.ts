import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetReviewsForRunPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    runId: number;
}
export declare class ActionsGetReviewsForRunRequest extends SpeakeasyBase {
    pathParams: ActionsGetReviewsForRunPathParams;
}
export declare class ActionsGetReviewsForRunResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    environmentApprovals?: shared.EnvironmentApprovals[];
}
