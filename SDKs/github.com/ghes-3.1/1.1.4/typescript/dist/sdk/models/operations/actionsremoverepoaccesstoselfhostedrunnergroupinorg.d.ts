import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgPathParams extends SpeakeasyBase {
    org: string;
    repositoryId: number;
    runnerGroupId: number;
}
export declare class ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest extends SpeakeasyBase {
    pathParams: ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgPathParams;
}
export declare class ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
