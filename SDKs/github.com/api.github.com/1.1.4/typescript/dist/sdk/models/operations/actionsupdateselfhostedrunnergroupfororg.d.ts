import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsUpdateSelfHostedRunnerGroupForOrgPathParams extends SpeakeasyBase {
    org: string;
    runnerGroupId: number;
}
export declare enum ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum {
    Selected = "selected",
    All = "all",
    Private = "private"
}
export declare class ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody extends SpeakeasyBase {
    name?: string;
    visibility?: ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum;
}
export declare class ActionsUpdateSelfHostedRunnerGroupForOrgRequest extends SpeakeasyBase {
    pathParams: ActionsUpdateSelfHostedRunnerGroupForOrgPathParams;
    request?: ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody;
}
export declare class ActionsUpdateSelfHostedRunnerGroupForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    runnerGroupsOrg?: shared.RunnerGroupsOrg;
}
