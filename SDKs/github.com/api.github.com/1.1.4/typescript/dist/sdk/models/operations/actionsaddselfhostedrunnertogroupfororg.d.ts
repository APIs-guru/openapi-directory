import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsAddSelfHostedRunnerToGroupForOrgPathParams extends SpeakeasyBase {
    org: string;
    runnerGroupId: number;
    runnerId: number;
}
export declare class ActionsAddSelfHostedRunnerToGroupForOrgRequest extends SpeakeasyBase {
    pathParams: ActionsAddSelfHostedRunnerToGroupForOrgPathParams;
}
export declare class ActionsAddSelfHostedRunnerToGroupForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
