import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetSelfHostedRunnerGroupForOrgPathParams extends SpeakeasyBase {
    org: string;
    runnerGroupId: number;
}
export declare class ActionsGetSelfHostedRunnerGroupForOrgRequest extends SpeakeasyBase {
    pathParams: ActionsGetSelfHostedRunnerGroupForOrgPathParams;
}
export declare class ActionsGetSelfHostedRunnerGroupForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    runnerGroupsOrg?: shared.RunnerGroupsOrg;
}
