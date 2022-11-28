import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsDeleteSelfHostedRunnerFromRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    runnerId: number;
}
export declare class ActionsDeleteSelfHostedRunnerFromRepoRequest extends SpeakeasyBase {
    pathParams: ActionsDeleteSelfHostedRunnerFromRepoPathParams;
}
export declare class ActionsDeleteSelfHostedRunnerFromRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
