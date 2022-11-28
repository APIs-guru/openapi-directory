import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams extends SpeakeasyBase {
    org: string;
    runnerGroupId: number;
}
export declare class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody extends SpeakeasyBase {
    selectedRepositoryIds: number[];
}
export declare class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest extends SpeakeasyBase {
    pathParams: ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams;
    request?: ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody;
}
export declare class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
