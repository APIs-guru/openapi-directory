import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsRemoveSelfHostedRunnerFromGroupForOrgPathParams extends SpeakeasyBase {
    org: string;
    runnerGroupId: number;
    runnerId: number;
}
export declare class ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest extends SpeakeasyBase {
    pathParams: ActionsRemoveSelfHostedRunnerFromGroupForOrgPathParams;
}
export declare class ActionsRemoveSelfHostedRunnerFromGroupForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
